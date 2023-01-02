import Link from 'next/link';
import AboutMe from '../components/AboutMe';
import Meta from '../components/Meta';
import PostSummary from '../components/PostSummary';
import { importAll } from '../scripts/utils';
import styles from '../styles/Home.module.css';

const Home = ({ posts }) => {
  return (
    <>
      <AboutMe />
      <Link href="/about">More about me</Link>

      <div className={styles.articleList}>
        <p className={styles.desc}>Newly Published</p>
        {posts.map((post) => (
          <PostSummary key={post.slug} {...post} />
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
