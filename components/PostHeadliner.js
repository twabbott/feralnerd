import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import Date from './Date';
import ReadingTime from './ReadingTime';

const Container = styled.article`
  margin: 1em 0;
  width: ${(props) => (props.large ? '100%' : '48%')};

  .photo {
    position: relative;
    width: 100%;
    height: ${(props) => (props.large ? '56.25vw' : '28vw')};
    max-height: 423px;

    & img {
      object-fit: cover;
      border-radius: 5px;
    display: block;
    box-shadow: 2px 2px 10px rgb(12, 13, 19);
    }
  }

  .content {
    width: 100%;
  }

  & h1 {
    margin .25em 0 0 0;

    & a {
      color: ${(props) => props.theme.colors.headings};
    }
  }

  & p {
    margin .25em 0;
  }
`;

const PostSummary = ({
  title,
  date,
  excerpt,
  link,
  image,
  imageAlt,
  large,
  readingTime,
}) => {
  return (
    <Container large={large}>
      <section className="photo">
        <Link href={link}>
          <Image src={image} alt={imageAlt} fill priority />
        </Link>
      </section>
      <h1>
        <Link href={link}>{title}</Link>
      </h1>
      {excerpt && <p>{excerpt}</p>}
      <p>
        <Date date={date} />
        <ReadingTime minutes={readingTime} />
      </p>
      <p>
        <Link href={link}>Read more &rarr;</Link>
      </p>
    </Container>
  );
};

PostSummary.defaultProps = {
  title: '[Title not set]',
  imageAlt: 'Hero image',
};

export default PostSummary;
