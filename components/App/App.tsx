import Image from "next/image";
import styles from "./App.module.scss";

export const App = () => (
  <section className={styles.app}>
    <div className={styles.app__content}>
      <div>
        <div className={styles.app__title}>Trusted & Transparent</div>
        <div className={styles.app__desc}>Everything is on-Chain</div>
      </div>
      <div className={styles.app__img}>
        <Image fill src="/app_img.png" alt="" />
      </div>
    </div>
  </section>
);

// const Button = ({
//   icon,
//   desc,
//   title,
// }: {
//   icon: string;
//   title: string;
//   desc: string;
// }) => (
//   <div className={styles.app__button}>
//     <Image src={icon} width={27} height={27} alt="" />
//     <div>
//       <div className={styles.app__button_desc}>{desc}</div>
//       <div className={styles.app__button_title}>{title}</div>
//     </div>
//   </div>
// );
