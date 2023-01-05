import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import Date from './Date';
import { responsiveContainer } from '../styles/mixins';
import ReadingTime from './ReadingTime';
import { useFrontmatter } from './SiteInfoContext';
import SuggestedReading from './SuggestedReading';

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

const NotPublished = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 3em;
  background-color: maroon;
  color: yellow;
  font-weight: bold;
`;

const Frontmatter = ({ children }) => {
  const {
    isPublished,
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

      {!isPublished && (
        <NotPublished>This post has not yet been published.</NotPublished>
      )}

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
        <SuggestedReading />
      </Article>
    </>
  );
};

Frontmatter.defaultProps = {
  title: '[Title not set]',
  imageAlt: 'Hero image',
};

export default Frontmatter;
