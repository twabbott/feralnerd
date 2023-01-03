import Head from 'next/head';
import styled from 'styled-components';

import PostSummary from '../components/PostSummary';
import { importAll } from '../scripts/utils';
import { responsiveContainer } from '../styles/mixins';

const Container = styled.div`
  ${responsiveContainer}
`;

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog Rocket</title>
      </Head>

      <Container>
        {posts.map((post) => (
          <PostSummary key={post.slug} {...post} />
        ))}
      </Container>
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
