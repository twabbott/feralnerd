import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { siteMap } from '../scripts/siteMap';
import { responsiveContainer } from '../styles/mixins';
import logo from '../public/images/logo.png';

const Container = styled.header`
  background-color: ${(props) => props.theme.colors.bgSecondary};
  margin-bottom: 1em;

  & > nav {
    ${responsiveContainer}

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 3em;
  }

  & .left {
    display: flex;
  }

  & .logo {
    margin-top: 3px;
  }

  & h1.title {
    margin 13px 0 0 .5em;
    padding: 0 0;

    & a {
    color: ${(props) => props.theme.colors.logo};
    }
  }

  & ul {
    margin: 0 0;
    padding: 0 0;
  }

  & li {
    list-style: none;
    display: inline-block;
    margin: 0 0;

    & a {
      color: ${(props) => props.theme.colors.menu};
      margin: 0 0;
      padding: .4em 1em;
      display: block;
      border-bottom: 3px solid ${(props) => props.theme.colors.bgSecondary};
    }

    & a:hover {
      color: ${(props) => props.theme.colors.menuHighlight};
      background-color: ${(props) => props.theme.colors.bgSecondaryHighlight};
      border-radius: 10px 10px 0 0;
      border-bottom: 3px solid ${(props) => props.theme.colors.headings};
    }
  }
`;

function PageHeader() {
  return (
    <Container>
      <nav>
        <div className="left">
          <Link href="/">
            <Image
              src={logo}
              width="48"
              height="48"
              alt="logo"
              className="logo"
            />
          </Link>
          <h1 className="title">
            <Link href="/">{siteMap.title}</Link>
          </h1>
        </div>
        <ul>
          {siteMap.menu.map((item) => (
            <li key={item.id}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

export default PageHeader;
