import Head from 'next/head';
import styled from 'styled-components';
import { responsiveContainer } from '../styles/mixins';

import Date from './Date';

const Article = styled.article`
  ${responsiveContainer}

  & .title {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  & .info {
    margin-bottom: 1rem;
  }
`;

const Frontmatter = ({ title, keywords, excerpt, date, children }) => {
  const titleText = `${title} - Blog Rocket`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
        {keywords && <meta name="keywords" content={keywords} />}
      </Head>

      <Article>
        <h1>{title}</h1>
        <p>
          <Date date={date} />
        </p>
        {excerpt && <p>{excerpt}</p>}
        {children}
      </Article>
    </>
  );
};

Frontmatter.defaultProps = {
  title: '[Title not set]',
};

export default Frontmatter;
