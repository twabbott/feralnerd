import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import SocialApp from '@/components/SocialApp';

import { siteMap, SocialApps } from '../scripts/siteMap';
import portrait from '../public/images/avatar-photo.png';
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
      display: flex;
      justify-content: flex-start;
      margin-top: 1rem;
    }

    svg {
      margin-right: 0.5rem;
    }

    & .siteMap a {
      color: ${(props) => props.theme.colors.menuHighlight};
      padding: 0.2em 1em;
      display: block;
    }

    & .siteMap a:hover {
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
            <Image
              src={portrait}
              width={120}
              height={160}
              alt={siteMap.about.name}
            />
          </div>
          <div>
            <h1>{siteMap.about.name}</h1>
            <p>{siteMap.about.description}</p>
          </div>
        </div>
        <div>
          <h2>Site Map</h2>
          {siteMap.menu.map((item) => (
            <div key={item.id} className="siteMap">
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
          <div className="social">
            {siteMap.social.map((item) => (
              <SocialApp key={item.icon} {...item} />
            ))}
          </div>
          <p>&copy; 2022, All Rights Reserved</p>
        </div>
      </div>
    </Container>
  );
}
