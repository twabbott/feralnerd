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
      <Image {...props} alt="" />
    </Container>
  );
}

export default Avatar;
