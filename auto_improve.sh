#!/bin/bash
# Auto improvement script for okul-sitesi
# Calls Hermes Agent with a one-shot prompt to perform improvements, then pushes changes.

set -e

cd /Users/hkn/okul-sitesi

# Optional: pull latest changes
git pull origin main

# Run Hermes one-shot to perform the improvement task.
# We use a sufficiently detailed prompt.
/Users/hkn/.local/bin/hermes -z "Improve all okul-sitesi pages (S0-S5) per PLAN.md: add interactive elements ([-]/[+] buttons, live visualizations), verify real-life examples with sources, ensure no broken links, run smoke test, and push changes to GitHub Pages."

# After the Hermes run, commit and push any changes.
git add .
if ! git diff --cached --quiet; then
    git commit -m "Automated improvement $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin main
fi