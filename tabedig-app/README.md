# Tabedig App

Live Demo: https://kenfj.github.io/tabedig/

## Setup

```bash
# Next.js with TypeScript
# https://github.com/vercel/next.js/tree/master/examples/with-typescript
npx create-next-app tabedig-app --example with-typescript --use-npm

# better sample code in --example with-typescript
# but useful to refer --example with-chakra-ui-typescript
# https://github.com/vercel/next.js/tree/master/examples/with-chakra-ui-typescript

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

```bash
# install Chakra UI
# https://chakra-ui.com/docs/getting-started
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
# optional
npm i @chakra-ui/icons @chakra-ui/theme-tools
```

```bash
npm install react-google-charts @types/google.visualization
```

```bash
npm outdated  # check
npm update    # update
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

## Chakra UI Cheat Sheet

1. put layout (most likely `<Stack>` or `<Flex>`)
2. put boxes (`<Box>` `<Heading>` `<Text>`) in the layout
3. adjust size, margin/padding and color

__Tag Component Comparison__

* `<h1>` -> `<Heading as="h1">`
* `<p>` -> `<Text>` or `<Container>`
* `<div>`
  - `<Box>` just `<div>` (`<Card>` in Material UI)
  - `<Stack>` box list container used with `<StackDivider/>`
  - `<Flex>` flex box container used with `<Spacer/>`
    - note `<Flex>` can span the entire width but not `<Stack>`
* `<a>` -> `<Link>` or `<Box as="a">`

```JSX
// typical use case
<Flex> (or could be <Stack>)
  <Box>
    <Heading>Foo</Heading>
    <Text>foo</Text>
  </Box>
  <Box>
    <Heading>Bar</Heading>
    <Text>bar</Text>
  </Box>
</Flex> (or </Stack>)
```

* Flex and Spacer vs Grid vs Stack
  - https://chakra-ui.com/docs/layout/flex#flex-and-spacer-vs-grid-vs-stack

## Reference

* https://nextjs.org/docs/getting-started
* https://www.wakuwakubank.com/posts/771-react-nextjs-ssg/
* https://kakakakakku.hatenablog.com/entry/2020/04/14/100623
* https://create-react-app.dev/docs/deployment/#github-pages
* Deploy Next.js (SSG) to GitHub Pages using GitHub Actions
  - https://www.youtube.com/watch?v=yRz8D_oJMWQ
* https://gotohayato.com/content/517/
* How to Use Chakra UI with Next.js and React
  - https://www.youtube.com/watch?v=ubB5l-HVPgY
* https://techblog.lclco.com/entry/2020/12/20/080000
* https://lamlam.dev/posts/nextjs-chakraui-ogp
* https://medium.com/swlh/next-js-usestaticprops-usestaticpaths-static-json-data-9f7903b8a5aa
