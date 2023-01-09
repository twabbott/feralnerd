import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { siteMap } from '../scripts/siteMap';
import SuggestedReading from 'components/SuggestedReading';
import { responsiveContainer } from '../styles/mixins';
import posts from '../scripts/siteInfo.json';
import { useEffect, useState } from 'react';

const Article = styled.article`
  ${responsiveContainer}

  min-height: 80vh;

  h6 {
    font-size: 8em;
    margin: 0 0;
  }

  .bigger {
    font-size: 1.25em;
  }
`;

export default function Error404() {
  const [url, setUrl] = useState();
  const router = useRouter();

  useEffect(() => {
    if (router) {
      setUrl(router.asPath);
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>404 Not Found - {siteMap.title}</title>
      </Head>

      <Article>
        <h6>( ._.)</h6>
        <p className="bigger">
          <strong>404</strong> | That URL does not exist.
        </p>
        <pre>{url}</pre>
        <p>...but wait, there&apos;s more!</p>
        <p>Check out these other fine articles. 👇</p>
        <SuggestedReading maxCount={20} />
      </Article>
    </>
  );
}
