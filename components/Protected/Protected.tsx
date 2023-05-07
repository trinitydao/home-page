import Image from "next/image";
import styles from "./Protected.module.scss";

export const Protected = () => (
  <section id="protected" className={styles.protected}>
    <div className={styles.protected__bg}>
      <div />
    </div>

    <div className={styles.protected__content}>
      <div className={styles.protected__block1}>
        <div className={styles.protected__title}>
          Everyone in BuddyDAO is well protected.
        </div>

        <div className={styles.protected__img_wrap}>
          <Image
            fill
            src="/protected_1.png"
            alt=""
          />
        </div>
      </div>

      <div className={styles.protected__block2}>
        <div className={styles.protected__desc}>
          BuddyDAO has a variety of features that make it the best place to
          start investment
        </div>
        <div className={styles.protected__role}>
          <RoleItem
            icon="/protected_icon_1.png"
            title="For Borrower"
            desc="No collateral needed Get a loan in seconds not days"
          />
          <RoleItem
            icon="/protected_icon_2.png"
            title="For Guarantor"
            desc="Generate interest from crypto assets without selling"
          />
          <RoleItem
            icon="/protected_icon_3.png"
            title="For Lender"
            desc="Hold high quality digital asset backed loan and get fixed and guaranteed return"
          />
        </div>
      </div>
    </div>
  </section>
);
const RoleItem = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => (
  <div className={styles.protected__role_item}>
    <div className={styles.protected__role_item__img}>
      <Image src={icon} width={60} height={60} alt="" />
    </div>
    <div className={styles.protected__role_item__right}>
      <div className={styles.protected__role_item__title}>{title}</div>
      <div className={styles.protected__role_item__desc}>{desc}</div>
    </div>
  </div>
);
