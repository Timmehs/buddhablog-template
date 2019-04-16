var fs = require('fs')
var path = require('path')

function validFileFilter(fileName) {
  const regex = /.md$/
  return regex.test(fileName)
}

function validFiles(fileDir) {
  return fs.readdirSync(fileDir, { encoding: 'utf-8' }).filter(validFileFilter)
}

/**
 * Gather valid filenames in the given directory and return objects produced by a given parser
 *
 * @param {string/path} fileDir - directory to parse
 * @param {callback} parser that accepts the raw file data and returns an object
 */
module.exports = function(fileDir, parser) {
  const files = validFiles(fileDir)
  return files.map(function(file) {
    const rawFile = fs.readFileSync(path.join(fileDir, file), {
      encoding: 'utf-8'
    })

    return parser(rawFile)
  })
}
