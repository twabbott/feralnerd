import Link from 'next/link';

import Date from './Date';

const PostSummary = ({ title, date, excerpt, link }) => {
  return (
    <div>
      <h3>
        <Link href={link}>{title}</Link>
      </h3>
      <p>
        <Date date={date} />
      </p>
      {excerpt && <p>{excerpt}</p>}
      <Link href={link}>Read more</Link>
    </div>
  );
};

export default PostSummary;
