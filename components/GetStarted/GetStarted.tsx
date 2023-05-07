import Image from "next/image";
import styles from "./GetStarted.module.scss";

export const GetStarted = () => (
  <section id="get-started" className={styles["get-started"]}>
    <div className={styles["get-started__title"]}>Get started in minutes</div>
    <div className={styles["get-started__info"]}>
      BuddyDAO supports a variety of the most popular digital currencies.
    </div>

    <div className={styles["get-started__steps"]}>
      <StepItem
        image="/get_started_step_1.png"
        title="1. Connect a buddy"
        desc=""
      />
      <StepItem
        image="/get_started_step_2.png"
        title="2. Share credit line"
        desc="Verify your identity with one of our trusted verification partners"
      />
      <StepItem
        image="/get_started_step_3.png"
        title="3. Get money"
        desc="Buy, sell and swap digital assets 24/7"
      />
    </div>
  </section>
);

const StepItem = ({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className={styles["get-started__steps-item"]}>
      <Image width={166} height={166} src={image} alt="" />
      <div className={styles["get-started__steps-item__title"]}>{title}</div>
      <div className={styles["get-started__steps-item__desc"]}>{desc}</div>
    </div>
  );
};
