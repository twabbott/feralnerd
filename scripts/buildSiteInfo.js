import fs from 'fs';
import path from 'path';

import getReadTime from './readTime';

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

export async function buildSiteInfoJson() {
  const dotSlash = '.' + path.sep;
  const context = require.context('../pages/posts/', true, /\.mdx$/);
  const files = context
    .keys()
    .filter((filename) => filename.startsWith(dotSlash));

  const promises = files.map((filename) => context(filename));
  const results = await Promise.allSettled(promises);
  const frontmatter = results
    .map((result, i) => {
      return {
        ...getFileInfo(files[i]),
        ...result.value.frontmatter,
      };
    })
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

  const json = JSON.stringify({ posts: frontmatter }, null, '  ');
  fs.writeFileSync(path.join(process.cwd(), 'scripts', 'siteInfo.json'), json, {
    encoding: 'utf-8',
  });

  return frontmatter;
}
