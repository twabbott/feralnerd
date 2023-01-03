import Head from 'next/head';
import styled from 'styled-components';

import PostSummary from '@/components/PostSummary';
import PostHeadliner from '@/components/PostHeadliner';
import { importAll } from '../scripts/utils';
import { responsiveContainer } from '../styles/mixins';

const Container = styled.div`
  ${responsiveContainer}

  min-height: 100vh;

  .headliner2 {
    display: flex;
    justify-content: space-between;
  }
`;

const Home = ({ posts }) => {
  const [first, second, third] = posts;

  return (
    <>
      <Head>
        <title>Blog Rocket</title>
      </Head>

      <Container>
        {first && <PostHeadliner large {...first} />}
        {!first && (
          <>
            <h1>( ._.)</h1>
            <p>Sure looks empty here. Let's create some content!</p>
          </>
        )}
        <div className="headliner2">
          {second && <PostHeadliner {...second} />}
          {third && <PostHeadliner {...third} />}
        </div>
        <>
          {posts
            .filter((_, index) => index >= 3)
            .map((post) => (
              <PostSummary key={post.slug} {...post} />
            ))}
        </>
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
