import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

// Define an initial state object.  You need properties
// for all values and all updater methods.
import initialState from '../scripts/siteInfo.json';

// Create your context (note the "Context" suffix)
const SiteInfoContext = createContext(initialState);

// Create your provider class
export function SiteInfoProvider({ children }) {
  // I'm using useState to hold state.
  const [posts, setPosts] = useState(initialState.posts);

  // Declare one or more updater functions
  // function countIncremented() {
  //     setCount(count + 1);
  // }

  // function countDecremented() {
  //     setCount(count - 1);
  // }

  // Every time there is an update, this value property
  // gets a new object which represents the updated state.
  return (
    <SiteInfoContext.Provider
      value={{
        posts,
        setPosts,
        // countIncremented,
        // countDecremented
      }}
    >
      {children}
    </SiteInfoContext.Provider>
  );
}

export default SiteInfoContext;

export function useFrontmatter() {
  const router = useRouter();
  const siteInfoCtx = useContext(SiteInfoContext);

  const slug = router.asPath.substring(router.asPath.lastIndexOf('/') + 1);
  const frontmatter = siteInfoCtx.posts.find((item) => item.slug === slug);

  console.log('frontmatter', frontmatter);

  return frontmatter;
}
