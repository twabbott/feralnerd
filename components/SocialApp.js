import { SocialApps } from '../scripts/siteMap';
import Facebook from '../public/images/social/facebook';
import LinkedIn from '../public/images/social/linkedin';
import Github from '../public/images/social/github.js';
import Instagram from '../public/images/social/instagram.js';
import Twitter from '../public/images/social/twitter.js';
import Link from 'next/link';

const socialApps = {
  [SocialApps.linkedIn]: (
    <LinkedIn width={32} height={32} color="rgb(169,173,193)" />
  ),
  [SocialApps.facebook]: (
    <Facebook width={32} height={32} color="rgb(169,173,193)" />
  ),
  [SocialApps.gitHub]: (
    <Github width={32} height={32} color="rgb(169,173,193)" />
  ),
  [SocialApps.instagram]: (
    <Instagram width={32} height={32} color="rgb(169,173,193)" />
  ),
  [SocialApps.twitter]: (
    <Twitter width={32} height={32} color="rgb(169,173,193)" />
  ),
};

export default function SocialApp({ icon, link }) {
  return <Link href={link}>{socialApps[icon]}</Link>;
}
