const Jimp = require('jimp')
const fs = require('fs')
const promisify = require('util').promisify
const path = require('path')

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const allowedFileExtensions = [
  '.jpg',
  '.JPG',
  '.jpeg',
  '.JPEG',
  '.png',
  '.PNG',
  '.bmp',
  '.BMP',
]

if (process.argv.length !== 4) {
  console.error('invalid number of arguments')
  process.exit(1)
}

let inDir = process.argv[2]
let outDir = process.argv[3]

async function exec() {
  let filenames = await promisify(fs.readdir)(inDir)
  asyncForEach(filenames, async fn => {
    try {
      let filename = `${inDir}/${fn}`
      let stat = await promisify(fs.lstat)(filename)
      if (stat.isDirectory()) {
        return console.log('Skipping directory: ', filename)
      }
      if (allowedFileExtensions.indexOf(path.extname(filename)) < 0) {
        return console.log('Skipping non image file: ', filename)
      }
      console.log('found image: ', filename)
      let image = await Jimp.read(filename)
      let originalExtension = path.extname(filename)
      let orignalResolution = image.getWidth() + 'x' + image.getHeight() + 'px'
      let outFilename = `${outDir}/${path.basename(
        filename,
        originalExtension
      )}.jpg`
      if (image.getWidth() <= 1920 && image.getHeight() <= 1080) {
        await image.quality(80).write(outFilename)
        console.log('image smaller than target resolution, converted to jpg')
      } else {
        await image
          .scale(0.5)
          // .scaleToFit(1920, 1080)
          .quality(80)
          .write(outFilename)
        console.log(
          'converted image from format ',
          originalExtension,
          ' ',
          orignalResolution,
          ' to ultra hd jpg'
        )
      }
    } catch (error) {
      console.error('error')
      process.exit(1)
    }
  })
}

exec()
