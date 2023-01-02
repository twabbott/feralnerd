import Image from "next/image";
import styles from "../styles/Home.module.css";

const AboutMe = () => {
  return (
    <div>
      <Image
        src="/images/tom.png"
        alt="john doe avatar"
        width={150}
        height={150}
        className={styles.img}
      />
      <p className={styles.p}>
        Hey, I am <strong>John Doe</strong>. I love coding. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Reiciendis commodi numquam
        incidunt blanditiis quibusdam atque natus inventore sunt autem iusto.
      </p>
    </div>
  );
};

export default AboutMe;
