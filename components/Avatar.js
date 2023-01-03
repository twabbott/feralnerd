import Image from 'next/image';

import styled from 'styled-components';

const Container = styled.div`
  & img.avatar {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

function Avatar(props) {
  return (
    <Container>
      <Image {...props} />
    </Container>
  );
}

export default Avatar;
