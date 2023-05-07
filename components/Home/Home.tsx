import Image from "next/image";
import styles from "./Home.module.scss";

export const Home = () => (
  <section className={styles.home} id="home">
    <div className={styles.home__left}>
      <div className={styles.home__title}>
        The first guarantor based DeFi lending platform
      </div>
      <div className={styles.home__info}>
        Buddy DAO aims to be the first guarantor based DeFi lending protocol. As
        part of the mission to build a Decentral bank where anyone can get a
        loan in seconds.
      </div>
      <a className={styles.home__btn} href="#get-started">
        <div>Learn more</div>
      </a>
    </div>

    <div className={styles.home__img}>
      <div className={styles.home__img_inner}>
        <Image
          src="/img1.png"
          fill
          alt=""
        />
      </div>
    </div>
  </section>
);
