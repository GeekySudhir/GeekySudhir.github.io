# Sudhir Singh — GitHub Pages Portfolio

Static, responsive, monochrome DevOps/Cloud portfolio.

## Deploy

Upload the contents of this folder to a GitHub repository, then enable:
Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Add latest CV

Open `script.js` and replace:

```js
const siteConfig = {
  cvUrl: "YOUR_GOOGLE_DRIVE_CV_LINK_HERE"
};
```

with your latest Google Drive CV URL. Every Download CV button on the site uses that single setting.

Make sure the Google Drive file has sharing permissions appropriate for your visitors.
