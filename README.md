This is a sample blog app using instructions from [this article](https://blog.logrocket.com/create-next-js-mdx-blog/).

1. `@mdx-js/loader@next` is the integration, provided by MDX for webpack bundlers, that compiles Markdown and MDX into JavaScript. We will configure it in our next.config.js file
2. `@mdx-js/react@next` provides the context for our app which we can wrap our components with and easily style our markdown contents
3. `gray-matter` we will use Front Matter in this blog, and gray-matter will parse it into an object of metadata
4. `remark-frontmatter` MDX does not provide support for Front Matter, so we need to use this package to ignore Front Matter when we view our MDX files as pages in the browser
5. `rehype-highlight` allows us to use highlight.js to apply syntax highlighting to any code block
