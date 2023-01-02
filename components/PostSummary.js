import Link from 'next/link';
import styles from '../styles/Home.module.css';

const PostItem = ({ title, date, excerpt, link }) => {
  return (
    <div className={styles.postItem}>
      <h3>
        <Link href={link}>{title}</Link>
      </h3>
      <p>
        <em>{date}</em>
      </p>
      {excerpt && <p>{excerpt}</p>}
      <Link href={link}>Read more</Link>
    </div>
  );
};

export default PostItem;
