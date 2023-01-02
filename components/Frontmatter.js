import Head from 'next/head';
import Date from './Date';

const Frontmatter = ({ title, keywords, excerpt, date }) => {
  return (
    <>
      <Head>
        <title>{title} - Blog Rocket</title>
        {keywords && <meta name="keywords" content={keywords} />}
      </Head>

      <h1>{title}</h1>
      <p>
        <Date date={date} />
      </p>
      {excerpt && <p>{excerpt}</p>}
    </>
  );
};

Frontmatter.defaultProps = {
  title: '[Title not set]',
};

export default Frontmatter;
