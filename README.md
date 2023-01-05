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

- Add a 404 page.
  - show url they were trying to get to
  - I'm sorry, that page doesn't exist.
  - Take me back button
  - Suggest some other articles
