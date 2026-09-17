#!/bin/bash
cd /Users/hkn/okul-sitesi
# Pull latest changes (if any)
git pull origin main
# If there is a build step, run it here (currently static site)
# For now just touch a timestamp to indicate run
date > last_run.txt
# Commit and push if there are changes
git add .
if git diff --cached --quiet; then
    echo "No changes to commit"
else
    git commit -m "Automated update $(date)"
    git push origin main
fi