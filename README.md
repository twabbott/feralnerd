# Blog Rocket

The blog template project, that's rocket-fast! 🚀

Features:

- Creating a new post is as easy as making a new folder and adding `index.mdx`
- Automated front page
  - Pages are added automatically, once you build the project. Pages appear on the front page without any additional configuration.
  - Pages are sorted by date, with the most recent at the top.
  - The first article is full-width. The second and third articles are half-width, and the next 20 articles appear in a list with a thumbnail photo.
- Page frontmatter is fully data-driven
  - Post title
  - Hero image
  - Summary
  - Reading time (automatically calculated)
- Fully responsive mobile-first design.
- Styling is controlled by a theme, so you can change the color scheme to something you like.

## Tech stack

This is a sample blog app using Next.js. I based it on the instructions from [this article](https://blog.logrocket.com/create-next-js-mdx-blog/).

1. `@mdx-js/loader@next` Allows us to write our posts in Markdown (MDX), so we don't have to "program" every article. MDX is just better for writing content.
2. `@mdx-js/react@next` Allows us to integrate MDX with Next.js
3. `rehype-highlight` allows us to use highlight.js to apply syntax highlighting to any code block

Not using `grey-matter`. Why? Well ... because I wanted to be able to reference frontmatter content within the MDX file. I found that I had a lot of copy-pasting to do. MDX really doesn't need this library. So, yeah.

## Running the project locally

This project requires Node v16. Don't use anything higher than that, or it won't build.

To start the project, run the following commands

```
nvm use 16
npm install
npm run dev
```

Once the project builds, you can get to it by going to [localhost:3000](http://localhost:3000).

## How to add a page

Begin by creating a folder under `.../pages/posts`. The folder name that you choose will become a slug for the article.

In your new folder, create a file named `index.mdx`. This will be where you put all the content for your page.

Open the file, and copy-paste in this template:

```
import Frontmatter from "@/components/Frontmatter.js";

import image from "./hero.jpg"; // Import your hero image

export const frontmatter = {
    isPublished: false,
    title: "Your title here",
    date: "2022-03-21",
    excerpt: "Add a one-sentence summary/preview",
    image,
    imageAlt: "Alt-text for your image",
    imageCredit: `Photo by <a href="https://unsplash.org">John Doe</a>`,
}

export default ({children}) => (<Frontmatter>{children}</Frontmatter>);

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.

Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
```

And that's it. Save the file and run the project. The project will find your new file, and build it in and populate it on the front page.

The front page sorts articles by date, most recent at the top.

I recommend putting all images for your post in the same folder as your markdown, just to keep things organized. Here is the recommended folder structure.

```
   pages/posts/my-new-post
     |__ index.mdx
     |__ hero.png
     |__ screenshot.png
     |__ (etc, etc...)
```
