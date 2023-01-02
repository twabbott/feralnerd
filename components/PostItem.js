import Link from 'next/link';
import styles from '../styles/Home.module.css';

const PostItem = ({ post }) => {
  return (
    <div className={styles.postItem}>
      <h3>
        <Link href={post.link}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <Link href={post.link}>Read more</Link>
    </div>
  );
};

export default PostItem;
