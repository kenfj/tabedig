// see also
// https://qiita.com/syakoo/items/2eea9dd1b2519a89cc12
// https://wallis.dev/blog/next-js-basepath-and-assetprefix

module.exports = {
  basePath: process.env.CI ? `/${process.env.REPO_NAME}` : '',
  assetPrefix: process.env.CI ? `/${process.env.REPO_NAME}/` : '',
}
