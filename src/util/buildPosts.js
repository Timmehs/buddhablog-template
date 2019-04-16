var yaml = require('js-yaml')
var parseBuddhaFiles = require('./parseBuddhaFiles')

function parsePost(rawString) {
  const splitContent = rawString.split('----Content Below This Line----')
  const data = yaml.safeLoad(splitContent[0])
  const tags = (data.tags && data.tags.split(',')) || null

  return {
    ...data,
    tags,
    markdown: splitContent.slice(1).join('')
  }
}

module.exports = function(postsDir) {
  return parseBuddhaFiles(postsDir, parsePost)
}
