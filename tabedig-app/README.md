# Tabedig App

Live Demo: https://kenfj.github.io/tabedig/

## Setup

```bash
# Next.js with TypeScript
# https://github.com/vercel/next.js/tree/master/examples/with-typescript
npx create-next-app tabedig-app --example with-typescript --use-npm

cd tabedig-app

# create src directory and mv pages components etc to src
# https://nextjs.org/docs/advanced-features/src-directory

npm install gh-pages --save-dev

# install only eslint (without Prettier same as create react app)
npm install --save-dev \
  eslint \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint-config-react-app

# update eslintConfig in package.json from typescript-eslint config
# https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#configuration

# fix Link for known issue of jsx-a11y/anchor-is-valid
# https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md#case-i-use-nextjs-and-im-getting-this-error-inside-of-links

npm run lint

# start development server
npm run dev
open http://localhost:3000
```

## Deploy

```bash
npm run build
# check the output
# λ  (Server)
# ○  (Static)
# ●  (SSG)
# Note: "next export" will only handle Static and SSG

# manually deploy to GitHub Pages
export CI=true
export REPO_NAME=tabedig
npm run build
npm run export
touch ./out/.nojekyll

# gh-pages -d out -t
# https://qiita.com/wintyo/items/62b03a38c6fbae8ea914
npm run deploy
```

* `start` or `export`? (https://stackoverflow.com/questions/61724368)
  - `npm run build`: build to `.next` (required before `start` or `export`)
  - `npm run start`: start hybrid server of SSG and SSR (Server Side Rendering)
  - `npm run export`: generate to `out` for SSG (Static Site Generator)

## Reference

* https://nextjs.org/docs/getting-started
* https://www.wakuwakubank.com/posts/771-react-nextjs-ssg/
* https://kakakakakku.hatenablog.com/entry/2020/04/14/100623
* https://create-react-app.dev/docs/deployment/#github-pages
* Deploy Next.js (SSG) to GitHub Pages using GitHub Actions
  - https://www.youtube.com/watch?v=yRz8D_oJMWQ
* https://gotohayato.com/content/517/
