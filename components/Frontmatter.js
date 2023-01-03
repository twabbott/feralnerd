import Head from 'next/head';
import styled from 'styled-components';

import Date from './Date';

const Article = styled.article`
  margin: 0 24px;
  max-width: 1000px;

  @media screen and (min-width: 1000px) {
    & {
      margin: 24px auto;
      max-width: 952px;
    }
  }

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
