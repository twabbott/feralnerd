import Image from 'next/image';

import styled from 'styled-components';

const Container = styled.div`
  & img.avatar {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    display: block;
    box-shadow: 2px 2px 10px rgb(12, 13, 19);
  }
`;

function Avatar(props) {
  return (
    <Container>
      <Image {...props} alt="avatar" />
    </Container>
  );
}

export default Avatar;

fetch('https://swapi.dev/api/people/')
  .then((response) => {
    const { status, statusMessage } = response;

    if (status !== 200) {
      throw new Error(`Error fetching data ${status} ${statusMessage}`);
    }

    return response.json(); // 👈 return the next promise
  })
  .then((data) => data.results.forEach((item) => console.log(item.name)))
  .catch((error) => console.error(error));
