import { MDXProvider } from '@mdx-js/react';
import { SiteInfoProvider } from 'components/SiteInfoContext';
import { ThemeProvider } from 'styled-components';
import MDXComponents from '../components/MDXComponents';
import Layout from '../layouts/Layout';

import { GlobalStyle } from '../styles/GlobalStyle';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MDXProvider components={MDXComponents}>
          <SiteInfoProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SiteInfoProvider>
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}
