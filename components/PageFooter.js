import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { siteMap } from '../scripts/siteMap';
import portrait from '../public/images/avatar-photo.png';
import Facebook from '../public/images/social/facebook';
import LinkedIn from '../public/images/social/linkedin';
import Github from '../public/images/social/github.js';
import Instagram from '../public/images/social/instagram.js';
import Twitter from '../public/images/social/twitter.js';
import { responsiveContainer } from '../styles/mixins';

const Container = styled.footer`
  /* background for whole nav menu */
  background-color: ${(props) => props.theme.colors.bgSecondary};
  margin: 2em 0 0 0;

  .footer {
    ${responsiveContainer}

    color: rgb(128, 200, 255);
    margin: 0 24px;
    padding: 1rem 0;
    max-width: 1000px;

    display: flex;
    justify-content: space-between;

    /* turn off bullets */
    list-style-type: none;

    .aboutMe {
      display: flex;
      align-items: top;
    }

    .photo {
      margin-right: 1rem;
    }

    h1 {
      color: white;
      margin-top: 0px;
    }

    h2 {
      margin-top: 0px;
      color: white;
    }

    & img {
      border-radius: 5px;
      display: block;
      box-shadow: 2px 2px 10px rgb(33, 48, 40);
    }

    .social {
      margin-top: 1rem;
    }

    svg {
      margin-right: 0.5rem;
    }

    & a {
      color: ${(props) => props.theme.colors.menuHighlight};
      padding: 0.2em 1em;
      display: block;
    }

    & a:hover {
      background-color: ${(props) => props.theme.colors.bgSecondaryHighlight};
    }
  }
`;

export default function PageFooter() {
  return (
    <Container>
      <div className="footer">
        <div className="aboutMe">
          <div className="photo">
            <Image src={portrait} width={120} height={160} alt="Tom Abbott" />
          </div>
          <div>
            <h1>Tom Abbott</h1>
            <p>Principle front-end developer</p>
          </div>
        </div>
        <div>
          <h2>Site Map</h2>
          {siteMap.menu.map((item) => (
            <div key={item.id}>
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
          <div className="social">
            <LinkedIn width={32} height={32} color="rgb(169,173,193)" />
            <Facebook width={32} height={32} color="rgb(169,173,193)" />
            <Github width={32} height={32} color="rgb(169,173,193)" />
            <Instagram width={32} height={32} color="rgb(169,173,193)" />
            <Twitter width={32} height={32} color="rgb(169,173,193)" />
          </div>
          <p>&copy; 2022, All Rights Reserved</p>
        </div>
      </div>
    </Container>
  );
}
