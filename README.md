# 🧪 AutoPatch CI Test Project

A zero-dependency Node.js project designed to test GitHub Actions workflows and AutoPatch's automated CI self-healing pipeline.

---

## 🚀 Quick Setup & Push to GitHub

1. Initialize git and push to your new GitHub repository:
   ```bash
   cd test_repos/demo-node-app
   git init
   git add .
   git commit -m "feat: initial commit with CI workflow"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

2. Make sure AutoPatch has tracked this repository on your dashboard (`http://localhost:3000`).

---

## 💥 How to Trigger a CI Failure on Demand

To trigger a CI failure and watch AutoPatch diagnose and open a PR:

### Option 1: Break application logic in `src/math.js`
Change `add(a, b)`:
```javascript
// src/math.js
function add(a, b) {
  return a - b; // ❌ intentional bug
}
```
Commit and push:
```bash
git commit -am "test: break add function"
git push
```

### Option 2: Introduce a syntax or import error in `src/math.js`
```javascript
module.exports = {
  // missing add
  subtract,
  formatGreeting,
};
```
Commit and push:
```bash
git commit -am "test: break exports"
git push
```

---

## 🤖 What AutoPatch Will Do:
1. **Detect**: GitHub Actions triggers the failure webhook. AutoPatch intercepts it.
2. **Diagnose**: AutoPatch downloads the error log, loads the repo tree and `src/math.js`, and identifies the root cause using Gemini.
3. **Patch & PR**: Creates branch `autopatch/fix-...` and opens a PR fixing `src/math.js`.
4. **Self-Healing Retries**: If the PR check fails, AutoPatch will iteratively retry up to 3 times on the same PR until it passes.
