import fs from 'fs';
import path from 'path';

import readTime from './readTime';

const START_BANNER = '`{/* BEGIN */}`';
function getReadTime(pathname) {
  const filename = path.join(process.cwd(), 'pages', 'posts', pathname);

  let fileContents = fs.readFileSync(filename, 'utf8');
  const bannerPos = fileContents.indexOf(START_BANNER);
  if (bannerPos < 0) {
    return 0;
  }

  fileContents = fileContents.substring(bannerPos + START_BANNER.length);

  return readTime(fileContents);
}

function getFileInfo(pathname) {
  const parts = pathname.split(path.sep);
  if (parts[parts.length - 1] === 'index.mdx') {
    parts.pop();
  }
  parts.splice(1, 0, 'posts');
  const slug = parts[parts.length - 1];

  const link = parts.join(path.sep);

  return { filename: pathname, link, slug, readingTime: getReadTime(pathname) };
}

export async function importAll() {
  const dotSlash = '.' + path.sep;
  const context = require.context('../pages/posts/', true, /\.mdx$/);
  const files = context
    .keys()
    .filter((filename) => filename.startsWith(dotSlash));
  console.log('all filenames', files);

  const promises = files.map((filename) => context(filename));
  const results = await Promise.allSettled(promises);
  const frontmatter = results
    .map((result, i) => {
      return {
        ...getFileInfo(files[i]),
        ...result.value.frontmatter,
      };
    })
    .filter((post) => post.isPublished)
    .sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;
    })
    .reverse();

  return frontmatter;
}
