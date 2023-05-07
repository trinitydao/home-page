import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./Partners.module.scss";
import SLVCLogo from "./assets/SLVC.png";
import ACACIALogo from "./assets/ACACIA.jpg";

export const Partners = () => {
  return (
    <section className={styles["partners"]}>
      <h1 className={styles["partners_title"]}>Partners</h1>

      <div className={styles["partners_content"]}>
        <PartnerItem logo={SLVCLogo} href="https://www.slvcap.com" />
        <PartnerItem logo={ACACIALogo} href="https://acaciadigital.io" />
      </div>
    </section>
  );
};

const PartnerItem = ({
  logo,
  href,
}: {
  href: string;
  logo: string | StaticImageData;
}) => {
  return (
    <a href={href}>
      <div className={styles["partners-item"]}>
        <Image className={styles["partners-item_image"]} src={logo} alt="" />
      </div>
    </a>
  );
};
