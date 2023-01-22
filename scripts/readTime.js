import fs from 'fs';
import path from 'path';

function readTime(content) {
  const WPS = 275 / 60;

  var images = 0;
  const regex = /\w/;

  let words = content.split(' ').filter((word) => {
    if (word.includes('<img')) {
      images += 1;
    }
    return regex.test(word);
  }).length;

  var imageAdjust = images * 4;
  var imageSecs = 0;
  var imageFactor = 12;

  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }

  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);

  return minutes;
}

export default function getReadTime(pathname) {
  const filename = path.join(process.cwd(), 'pages', 'posts', pathname);

  let fileContents = fs.readFileSync(filename, 'utf8');
  const bannerPos = fileContents.indexOf('export default');
  if (bannerPos < 0) {
    return 0;
  }

  fileContents = fileContents.substring(fileContents.indexOf('\n', bannerPos));

  const minutes = readTime(fileContents);
  console.log(`reading time: ${pathname} - ${minutes} minutes`);
  return minutes;
}
