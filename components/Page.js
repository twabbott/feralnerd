import Head from 'next/head';
import styled from 'styled-components';

import { siteMap } from 'scripts/siteMap';
import { responsiveContainer } from '../styles/mixins';

const Article = styled.article`
  ${responsiveContainer}

  min-height: 100vh;
`;

const Page = ({ title, children }) => {
  const titleText = `${title} - ${siteMap.title}`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>

      <Article>{children}</Article>
    </>
  );
};

export default Page;
