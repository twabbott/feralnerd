This is a sample blog app using instructions from [this article](https://blog.logrocket.com/create-next-js-mdx-blog/).

1. `@mdx-js/loader@next` is the integration, provided by MDX for webpack bundlers, that compiles Markdown and MDX into JavaScript. We will configure it in our next.config.js file
2. `@mdx-js/react@next` provides the context for our app which we can wrap our components with and easily style our markdown contents
3. `remark-frontmatter` MDX does not provide support for Front Matter, so we need to use this package to ignore Front Matter when we view our MDX files as pages in the browser
4. `rehype-highlight` allows us to use highlight.js to apply syntax highlighting to any code block

Not using `grey-matter`. Why? Well ... because I wanted to be able to reference frontmatter content within the MDX file. I found that I had a lot of copy-pasting to do. MDX really doesn't need this library. So, yeah.

# Stuff to do

Add SEO. There's a library called [next-seo](https://www.npmjs.com/package/next-seo)

See if you can add better syntax highlighting with [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

## bugs:

- move frontmatter into a global context, so you can just pull it down based on the slug from the current url. Then you can fix these two errors:
  - Reading time isn't visible on the posts, because it's not part of the frontmatter. It's calculated at load-time.
    - maybe have the page component store this data in a context, so it can be shared and looked up by any component.
  - Add suggested other articles "You might also like to read:" at the end of every post
    - Show summaries of the five most recent posts.
    - Make sure you don't suggest the same article
