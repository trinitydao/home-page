import { ReactNode } from "react";
import Image from "next/image";

import styles from "./Team.module.scss";
import { Link } from "../Link";

export const Team = () => (
  <section id="contributors" className={styles.team}>
    <div className={styles.team__content}>
      <div className={styles.team__title}>Contributors</div>
      <div className={styles.team__person_wrap}>
        <Person
          avatar="/team_avatar_5.jpg"
          name="Masha Prusso"
          title={
            <>
              Former Head of Communications and Events at Polygon
              <br />
              Partner at Story VC
            </>
          }
          desc={
            <Link href="https://www.linkedin.com/in/masha-prusso-07632b57/">
              https://www.linkedin.com/in/masha-prusso-07632b57/
            </Link>
          }
        />
        <Person
          avatar="/team_avatar_6.jpg"
          name="Mariana Danilovic"
          title={
            <>
              Former Managing Director of BitAngels
              <br />
              Former Managing Director of KPMG
            </>
          }
          desc={
            <Link href="https://www.linkedin.com/in/marianadanilovic/">
              https://www.linkedin.com/in/marianadanilovic/
            </Link>
          }
        />
        <Person
          avatar="/team_avatar_7.jpg"
          name="Professor Sebastien Donadio"
          title={
            <>
              Professor, Columbia University
              <br />
              Engineering Head of Software Engineering – HC Technologies
            </>
          }
          desc={
            <Link href="https://www.linkedin.com/in/sebastien-donadio-01481920/">
              https://www.linkedin.com/in/sebastien-donadio-01481920/
            </Link>
          }
        />
        <Person
          avatar="/team_avatar_Diego Massimiliano De Giorgi.jpeg"
          name="Diego Massimiliano De Giorgi"
          title={
            <>
              Chairman, Kauris Holdings Limited
              <br />
              Head, House of Giorgi
            </>
          }
          desc={
            <Link href="https://www.linkedin.com/in/diegomassimilianodegiorgi/">
              https://www.linkedin.com/in/diegomassimilianodegiorgi/
            </Link>
          }
        />
      </div>
    </div>
  </section>
);

const Person = ({
  avatar,
  name,
  title,
  desc,
}: {
  avatar: string;
  name: string;
  title: ReactNode;
  desc: ReactNode;
}) => (
  <div className={styles.team__person}>
    <Image src={avatar} width={160} height={160} alt="" />
    <div className={styles.team__person_name}>{name}</div>
    <div className={styles.team__person_title}>{title}</div>
    <div className={styles.team__person_desc}>{desc}</div>
  </div>
);
