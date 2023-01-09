# FeralNerd Blog

Tom Abbott's tech blog.

This blog was created using using a fork of the [Blog Rocket](https://github.com/tom-abbott-irh/blog-rocket)




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
