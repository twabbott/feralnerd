import path from 'path';

function getFileInfo(pathname) {
  const parts = pathname.split(path.sep);
  if (parts[parts.length - 1] === 'index.mdx') {
    parts.pop();
  }
  parts.splice(1, 0, 'posts');
  const slug = parts[parts.length - 1];

  const link = parts.join(path.sep);

  return { link, slug };
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
