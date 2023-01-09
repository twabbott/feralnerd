import Link from 'next/link';
import styled from 'styled-components';

import { siteMap } from '../scripts/siteMap';
import { responsiveContainer } from '../styles/mixins';

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

  & h1.title {
    margin 0 0;
    padding: .3em 0;

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
        <h1 className="title">
          <Link href="/">{siteMap.title}</Link>
        </h1>
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
