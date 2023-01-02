import Link from "next/link";
import AboutMe from "../components/AboutMe";
import Meta from "../components/Meta";
import PostItem from "../components/PostItem";
import { getPosts } from "../scripts/utils";
import styles from "../styles/Home.module.css";

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

export const getStaticProps = () => {
  const posts = getPosts(1); // the argument has no effect yet

  return {
    props: {
      posts,
    },
  };
};
