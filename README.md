Peer Tutoring Website

This is a simple static site ready to be hosted on GitHub Pages.

Quick publish steps:

1. Create a GitHub repository and push this project to the `main` branch.

```bash
cd "Peer Tutoring Website"
git init
git add .
git commit -m "Initial commit - ready for GitHub Pages"
# create repo on GitHub, then add remote and push
git remote add origin git@github.com:youruser/your-repo.git
git branch -M main
git push -u origin main
```

2. The included GitHub Action (`.github/workflows/deploy.yml`) will automatically deploy the site to GitHub Pages when you push to `main`.

3. After the workflow completes, your site will be available at `https://<youruser>.github.io/<your-repo>/`.

Optional:
- To use a custom domain, add a `CNAME` file with your domain at the repository root and configure DNS.
- If you prefer to enable Pages via repository settings instead of Actions, go to Settings → Pages and set source to `gh-pages` or `main`/`/ (root)`.

If you want, I can initialize a git repo and push for you — provide the GitHub repo URL or create the repo and tell me when it's ready.
