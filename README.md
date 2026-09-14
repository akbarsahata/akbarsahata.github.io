# akbarsahata.github.io

Personal site for **Akbar Sahata**, deployed with GitHub Pages at
[akbarsahata.id](https://akbarsahata.id).

## Structure

```
index.html               Home
profile/index.html       About, experience, skills, education
projects/index.html      Selected projects
publications/index.html  Peer-reviewed publications
style.css                Single shared stylesheet
robots.txt               Crawler directives
sitemap.xml              Indexable URLs
llms.txt                 Summary for AI crawlers
```

Everything is static HTML served from the repository root. There is no
JavaScript application, no service worker, and no web app manifest — PWA
support was intentionally dropped in favour of crawlability and simplicity.

## Local preview

```sh
python3 -m http.server
```

Then open <http://localhost:8000/>. Directory URLs such as
<http://localhost:8000/profile/> are served from their `index.html`.

## Deployment notes

GitHub Pages serves this repository root, so `index.html` at the root is
always the entry point. If a framework or static site generator is ever
introduced, its build output must keep a root `index.html` here (either
commit the build output or deploy it to the Pages root via GitHub Actions).
