import Image from 'next/image';

import styled from 'styled-components';

const Container = styled.div`
  & img.avatar {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <Image
        src="/images/tom.png"
        alt="john doe avatar"
        width={150}
        height={150}
        className="avatar"
      />
      <p>
        Hey, I am <strong>John Doe</strong>. I love coding. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Reiciendis commodi numquam
        incidunt blanditiis quibusdam atque natus inventore sunt autem iusto.
      </p>
    </Container>
  );
};

export default AboutMe;
