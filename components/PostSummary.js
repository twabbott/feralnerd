import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import Date from './Date';
import ReadingTime from './ReadingTime';

const Container = styled.article`
  display: flex;
  margin: 2em 0;

  .photo {
    position: relative;
    width: 320px;
    height:180px;
    margin-right: 1em;

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
    margin 0 0;

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
  readingTime,
}) => {
  return (
    <Container>
      <section className="photo">
        <Link href={link}>
          <Image src={image} alt={imageAlt} fill />
        </Link>
      </section>
      <section className="content">
        <h1>
          <Link href={link}>{title}</Link>
        </h1>
        {excerpt && <p>{excerpt}</p>}
        <p>
          <Date date={date} />
          <ReadingTime minutes={readingTime} />
        </p>
        <p>
          <Link href={link}>Read more</Link>
        </p>
      </section>
    </Container>
  );
};

PostSummary.defaultProps = {
  title: '[Title not set]',
  imageAlt: 'Hero image',
};

export default PostSummary;
