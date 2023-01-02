import Link from 'next/link';
import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import PostSummary from '../components/PostSummary';
import { importAll } from '../scripts/utils';

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog Rocket</title>
      </Head>
      <AboutMe />
      <Link href="/about">More about me</Link>

      <div>
        <p>Newly Published</p>
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
