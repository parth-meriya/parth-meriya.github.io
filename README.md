# Parth Meriya - Portfolio

Static portfolio website built with HTML, CSS and JavaScript (no frameworks, no build step).

## Structure
```
index.html              page content
css/style.css           all styling (dark/light themes, responsive)
js/main.js              navigation, theme toggle, contact links, form
assets/images/          project screenshots (add profile.jpg for your photo)
assets/favicon.svg      browser tab icon
resume/                 Parth_Meriya_Resume.pdf (download button points here)
```

## Customise
- Contact links and resume path: edit the `CFG` object at the top of `js/main.js`.
- Profile photo: save it as `assets/images/profile.jpg`.
- Replace the resume: overwrite `resume/Parth_Meriya_Resume.pdf` with the same file name.
- Project links: add a GitHub or Live Demo button inside each project card in `index.html` once repositories are public.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Deploy
Upload the whole folder to Vercel, Netlify, GitHub Pages or Render (static site). Set the publish directory to the project root; no build command is needed.
"# parth-meriya.github.io" 
