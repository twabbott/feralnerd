import { useContext } from 'react';
import styled from 'styled-components';

import PostSummary from './PostSummary';
import SiteInfoContext, {
  useAllPosts,
  useFrontmatter,
} from './SiteInfoContext';

const Line = styled.hr`
  margin-top: 5em;
  border: none;
  background-color: ${(props) => props.theme.colors.bgSecondary};
  height: 5px;
`;

export default function SuggestedReading({ maxCount = 5 }) {
  const frontmatter = useFrontmatter();
  const { posts } = useContext(SiteInfoContext);

  const suggestedPosts = posts
    .filter((post) => post.slug !== frontmatter?.slug)
    .filter((_, index) => index < maxCount);

  return (
    <>
      <Line />
      <h1>You might also like</h1>
      {suggestedPosts.map((post) => (
        <PostSummary key={post.slug} {...post} />
      ))}
    </>
  );
}
