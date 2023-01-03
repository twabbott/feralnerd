import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 13pt;
  font-weight: 333;
  color: rgb(169,173,193);
  background-color: ${(props) => props.theme.colors.bgPrimary};
}

p {
  margin: 1rem 0 1rem 0;
}

h1, h2, h3, h4 {
  margin: 1.5rem 0 0 0;
  color: ${(props) => props.theme.colors.headings};
  font-weight: 500;
}

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.33333rem;
}

h3 {
  font-size: 1.16666rem;
}

h4 {
  font-size: 1rem;
}

a {
  color: rgb(210, 218, 255);
  font-weight: 500;
  text-decoration: none;
}

a:visited {
  color: rgb(82, 88, 121);
}

a:hover {
  color: rgb(203, 208, 233);
}

strong, b {
  color: rgb(197, 203, 231);
  font-weight: 500;
}

code, tt {
  color: rgb(197, 203, 231);
  background-color: rgb(44, 48, 73);
  border-radius: 2px;
}

pre {
  color: rgb(197, 203, 231);
  background-color: rgb(44, 48, 73);
  border-radius: 4px;
  padding: 1em;
}
`;
