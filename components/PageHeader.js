import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.header`
  background-color: rgb(164, 233, 228);

  & > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & li {
    list-style: none;
    display: inline-block;
    margin: 0 10px;
  }
`;

function PageHeader() {
  return (
    <Container>
      <nav className="max-width-container">
        <h2>
          <Link href="/">PressBlog</Link>
        </h2>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default PageHeader;
