import Link from 'next/link';
import AboutMe from '../components/AboutMe';
import Meta from '../components/Meta';
import PostItem from '../components/PostItem';
import { importAll } from '../scripts/utils';
import styles from '../styles/Home.module.css';

const Home = ({ posts }) => {
  return (
    <>
      <Meta />
      <AboutMe />
      <Link href="/about">More about me</Link>

      <div className={styles.articleList}>
        <p className={styles.desc}>Newly Published</p>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const posts = await importAll();
  console.log('posts', posts);

  return {
    props: {
      posts,
    },
  };
}
