import Head from 'next/head';
import styled from 'styled-components';

import PostSummary from '@/components/PostSummary';
import PostHeadliner from '@/components/PostHeadliner';
import { buildSiteInfoJson } from '../scripts/buildSiteInfo';
import { responsiveContainer } from '../styles/mixins';
import { useAllPosts } from '@/components/SiteInfoContext';
import { siteMap } from 'scripts/siteMap';

const Container = styled.div`
  ${responsiveContainer}

  min-height: 100vh;

  .headliner2 {
    display: flex;
    justify-content: space-between;
  }
`;

function Home() {
  const [first, second, third, ...rest] = useAllPosts();
  return (
    <>
      <Head>
        <title>{siteMap.title}</title>
      </Head>

      <Container>
        {first && <PostHeadliner large {...first} />}
        {!first && (
          <>
            <h1>( ._.)</h1>
            <p>Sure looks empty here. Let&apos;s create some content!</p>
          </>
        )}
        <div className="headliner2">
          {second && <PostHeadliner {...second} />}
          {third && <PostHeadliner {...third} />}
        </div>
        <>
          {rest.map((post) => (
            <PostSummary key={post.slug} {...post} />
          ))}
        </>
      </Container>
    </>
  );
}
export default Home;

export async function getStaticProps() {
  // 🚩 Need this here, because this is how we build siteInfo.json
  const posts = await buildSiteInfoJson();

  console.log('Re-built siteInfo.json');
  // prettier-ignore
  posts.forEach((post) => {
    console.log(`   ${post.date}: ${post.isPublished ? '' : '[not published] '}${post.link}`);
  });
  return {
    props: {},
  };
}
