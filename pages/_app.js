import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';
import Layout from '../layouts/Layout';
import { GlobalStyle } from '@/components/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MDXProvider components={MDXComponents}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  );
}
