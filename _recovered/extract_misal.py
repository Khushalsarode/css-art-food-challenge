import json
import glob
import os
import re

TRANSCRIPT = r"C:\Users\HP.KHUSHALSARODE.000\.cursor\projects\c-Users-HP-KHUSHALSARODE-000-Downloads-dev-to-Frontend-Challenge-Comfort-Food-Edition\agent-transcripts\87fc67d1-c0e0-4b9d-98ae-ac1afa2c7292\87fc67d1-c0e0-4b9d-98ae-ac1afa2c7292.jsonl"
TRANSCRIPT_ROOT = r"C:\Users\HP.KHUSHALSARODE.000\.cursor\projects\c-Users-HP-KHUSHALSARODE-000-Downloads-dev-to-Frontend-Challenge-Comfort-Food-Edition\agent-transcripts"
OUT_DIR = r"C:\Users\HP.KHUSHALSARODE.000\Downloads\dev.to_Frontend_Challenge _Comfort_Food_Edition\css-art-comfort-bowl\_recovered"

css_candidates = []
html_candidates = []


def norm(p):
    return (p or "").lower().replace("\\", "/")


def css_priority(path):
    pl = norm(path)
    if "to add/misal-pav.css" in pl:
        return 5
    if "css/dishes/misal-pav.css" in pl:
        return 3
    if "ref/misal-pav.css" in pl:
        return 2
    return 1


def html_priority(path):
    pl = norm(path)
    if "to add/misal-pav.html" in pl:
        return 5
    if "partials/misal-pav.html" in pl:
        return 4
    if "ref/misal-pav.html" in pl:
        return 2
    return 1


def add_css(path, contents, line_no, source, transcript):
    if not contents or len(contents.strip()) < 50:
        return
    has_walnut = "walnut-tray" in contents
    css_candidates.append(
        {
            "priority": css_priority(path) + (1 if has_walnut else 0),
            "len": len(contents),
            "line": line_no,
            "path": path,
            "contents": contents,
            "source": source,
            "transcript": transcript,
            "walnut": has_walnut,
        }
    )


def add_html(path, contents, line_no, source, transcript):
    if not contents or len(contents.strip()) < 20:
        return
    html_candidates.append(
        {
            "priority": html_priority(path),
            "len": len(contents),
            "line": line_no,
            "path": path,
            "contents": contents,
            "source": source,
            "transcript": transcript,
        }
    )


def scan_transcript(fp):
    with open(fp, "r", encoding="utf-8", errors="replace") as f:
        for line_no, line in enumerate(f, 1):
            if "tool_use" not in line:
                continue
            try:
                obj = json.loads(line)
            except json.JSONDecodeError:
                continue
            content = obj.get("message", {}).get("content")
            if not isinstance(content, list):
                continue
            for block in content:
                if block.get("type") != "tool_use":
                    continue
                name = block.get("name", "")
                inp = block.get("input") or {}
                path = inp.get("path") or inp.get("target_file") or ""
                contents = (
                    inp.get("contents")
                    or inp.get("content")
                    or inp.get("new_string")
                    or ""
                )
                if name == "Write" and path and contents:
                    pl = norm(path)
                    if "misal-pav.css" in pl:
                        add_css(path, contents, line_no, "Write", fp)
                    elif "misal-pav.html" in pl:
                        add_html(path, contents, line_no, "Write", fp)
                if name == "StrReplace" and path and contents:
                    pl = norm(path)
                    if "misal-pav.css" in pl:
                        add_css(path, contents, line_no, "StrReplace", fp)
                    elif "misal-pav.html" in pl:
                        add_html(path, contents, line_no, "StrReplace", fp)


files = sorted(set(glob.glob(os.path.join(TRANSCRIPT_ROOT, "**", "*.jsonl"), recursive=True)))
for fp in files:
    scan_transcript(fp)

os.makedirs(OUT_DIR, exist_ok=True)
css_path = os.path.join(OUT_DIR, "misal-pav.css")
html_path = os.path.join(OUT_DIR, "misal-pav.html")

print(f"Scanned {len(files)} transcript files")
print(f"CSS candidates: {len(css_candidates)}")
for c in sorted(css_candidates, key=lambda x: (-x["priority"], -x["len"])):
    print(
        f"  pri={c['priority']} walnut={c['walnut']} len={c['len']} line={c['line']} "
        f"src={c['source']} path={c['path'][-70:]}"
    )

print(f"HTML candidates: {len(html_candidates)}")
for c in sorted(html_candidates, key=lambda x: (-x["priority"], -x["len"])):
    print(
        f"  pri={c['priority']} len={c['len']} line={c['line']} "
        f"src={c['source']} path={c['path'][-70:]}"
    )

css_ok = html_ok = False

if css_candidates:
    best = max(css_candidates, key=lambda x: (x["priority"], x["len"], x["line"]))
    with open(css_path, "w", encoding="utf-8", newline="\n") as out:
        out.write(best["contents"])
    css_ok = True
    print("CSS first80:", repr(best["contents"][:80]))
    print("CSS length:", len(best["contents"]))
    print("CSS path:", css_path)
    print("CSS walnut-tray:", best["walnut"])
else:
    print("CSS recovery: FAILED")

if html_candidates:
    best = max(html_candidates, key=lambda x: (x["priority"], x["len"], x["line"]))
    with open(html_path, "w", encoding="utf-8", newline="\n") as out:
        out.write(best["contents"])
    html_ok = True
    print("HTML first80:", repr(best["contents"][:80]))
    print("HTML length:", len(best["contents"]))
    print("HTML path:", html_path)
else:
    print("HTML recovery: FAILED")

print("SUMMARY css_ok=", css_ok, "html_ok=", html_ok)
