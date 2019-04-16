var buildPosts = require('./buildPosts')
var buildPages = require('./buildPages')

function buildStore(postsPath, pagesPath) {
  return {
    posts: buildPosts(postsPath),
    pages: buildPages(pagesPath)
  }
}

module.exports = buildStore
