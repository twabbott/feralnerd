import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { responsiveContainer } from '../styles/mixins';

import Date from './Date';
import ReadingTime from './ReadingTime';

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

  & .hero {
    position: relative;
    width: 100%;
    height: 56.25vw;
    max-height: 423px;

    & img {
      object-fit: cover;
    }
  }
`;

const Frontmatter = ({
  title,
  keywords,
  excerpt,
  date,
  children,
  image,
  imageAlt,
}) => {
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
        {image && (
          <div className="hero">
            <Image src={image} alt={imageAlt} fill priority />
          </div>
        )}
        {children}
      </Article>
    </>
  );
};

Frontmatter.defaultProps = {
  title: '[Title not set]',
  imageAlt: 'Hero image',
};

export default Frontmatter;
