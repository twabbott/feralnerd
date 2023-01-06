# Stuff to research

Add SEO. There's a library called [next-seo](https://www.npmjs.com/package/next-seo)

See if you can add better syntax highlighting with [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

## BUGS:

- Front page
  - First three articles should switch to small view if the page width goes below the breakpoint
    - We can fix this by rendering both the big summary _and_ the little summary, then use CSS to control which one is shown/hidden.
  - The thumbnails aren't exactly 16:9. We should probably just use pixel-widths.
- Make the page header responsive
  - Hamburger menu
  - Again, we can render both views in react, and use CSS to control which one is visible.

## TODO:

- Come up with a way to switch themes
  - themes live in the styles folder, and end with .theme.js
  - Have a dropdown on the footer that you can use to switch the theme
  - Save the preference in local storage
- Come up with a way to lazy-load additional posts, and put it at the bottom of the front page so that the user can see other posts.
  - The loader should say something like "Hang on, while we find more..."
  - Every 10 posts or so, add a banner with a button that says: "Looking for an older post? Check our archive!". Clicking the button takes you to an archive page
- Archive page
  Science Alert has [an AWESOME archive page](https://www.sciencealert.com/archive)!! Do something like that!
- Search bar
  - Do searches on the front-matter. is there a way we can do flex-search on the front-matter?
  - If there are no results, have a message that says "Hmmm, not sure we have that."
