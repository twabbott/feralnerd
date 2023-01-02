import Head from 'next/head';

const Meta = ({ title, keywords, excerpt }) => {
  return (
    <>
      <Head>
        <title>{title} - Blog Rocket</title>
        {keywords && <meta name="keywords" content={keywords} />}
      </Head>

      <h1>{title}</h1>
      {excerpt && <p>{excerpt}</p>}
    </>
  );
};

export default Meta;

// let's set a default title
Meta.defaultProps = {
  title: 'Title not set',
};
