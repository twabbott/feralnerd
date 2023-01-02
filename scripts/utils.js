import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getAllMarkdownFiles(startPath) {
  const contents = [];

  function helper(folderName) {
    const list = fs.readdirSync(folderName, {
      withFileTypes: true,
    });

    for (const entry of list) {
      const fullname = path.join(folderName, entry.name);
      if (entry.isDirectory()) {
        helper(fullname);
      } else if (fullname.endsWith('.mdx')) {
        contents.push(fullname);
      }
    }
  }

  helper(startPath);
  console.log('MDX files found', contents);

  return contents;
}

function getSlug(pathname) {
  const parts = pathname.split(path.sep);

  return parts[parts.length - 2];
}

function getLink(pathname) {
  const parts = pathname.split(path.sep);

  return parts[parts.length - 2];
}

export const getPosts = () => {
  const startDir = path.join(process.cwd(), 'pages', 'posts');
  const mdxFiles = getAllMarkdownFiles(startDir);

  const posts = mdxFiles
    .map((filename) => {
      if (!filename.endsWith('index.mdx')) {
        console.warn(`Found MDX file that is not named "index.mdx"`, filename);
        return;
      }

      const fileContent = fs.readFileSync(filename, 'utf-8');
      const { data, content } = matter(fileContent);

      const slug = getSlug(filename);
      let link = './' + filename.substr(startDir.length - 5);
      link = link.substr(0, link.length - 10);
      console.log('link', link);
      return { data, content, slug, link };
    })
    .filter((post) => post);

  return posts;
};

const createMultiplePosts = (posts) => {
  const multiplePosts = [];

  posts.forEach((post) => {
    for (let i = 0; i < 5; i++) {
      multiplePosts.push(post);
    }
  });

  return multiplePosts;
};
