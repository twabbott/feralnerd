import { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import Date from './Date';
import { responsiveContainer } from '../styles/mixins';
import ReadingTime from './ReadingTime';
import SiteInfoContext, { useFrontmatter } from './SiteInfoContext';

const Article = styled.article`
  ${responsiveContainer}

  & .hero {
    position: relative;
    width: 100%;
    height: 56.25vw;
    max-height: 423px;

    & img {
      object-fit: cover;
    }
  }

  & .imageCredit {
    text-align: center;
    font-size: 0.8em;
  }
`;

const Frontmatter = ({ children }) => {
  const siteInfo = useContext(SiteInfoContext);
  const {
    title,
    keywords,
    excerpt,
    date,
    readingTime,
    image,
    imageAlt,
    imageCredit,
  } = useFrontmatter();

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
          <ReadingTime minutes={readingTime} />
        </p>
        {excerpt && <p>{excerpt}</p>}
        {image && (
          <>
            <div className="hero">
              <Image src={image} alt={imageAlt} fill priority />
            </div>
            {imageCredit && (
              <div
                className="imageCredit"
                dangerouslySetInnerHTML={{ __html: imageCredit }}
              />
            )}
          </>
        )}
        {children}
        <p>There are {siteInfo.posts.length} other great posts to read!</p>
      </Article>
    </>
  );
};

Frontmatter.defaultProps = {
  title: '[Title not set]',
  imageAlt: 'Hero image',
};

export default Frontmatter;
