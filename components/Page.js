import Head from 'next/head';
import styled from 'styled-components';
import { responsiveContainer } from '../styles/mixins';

const Article = styled.article`
  ${responsiveContainer}

  min-height: 100vh;
`;

const Page = ({ title, children }) => {
  const titleText = `${title} - Blog Rocket`;
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
