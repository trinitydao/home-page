import { WhitePaperHref } from "../../constants";
import { Link } from "../Link";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__links_group}>
      <LinksGroup
        title="Documentation"
        links={[{ label: "White Paper", href: WhitePaperHref }]}
      />
      <LinksGroup
        title="Social"
        links={[
          { label: "Telegram", href: "https://t.me/buddydaoio" },
          { label: "Github", href: "https://github.com/trinitydao" },
          { label: "Twitter", href: "https://twitter.com/DaoBuddy" },
          { label: "Medium", href: "https://medium.com/@buddy.dao12" },
          { label: "Discord", href: "https://discord.gg/CYqkHW9NAj" },
          { label: "Reddit", href: "https://www.reddit.com/r/BuddyDAO/" },
          { label: "Youtube", href: "https://youtube.com/channel/UCYGNDd028LNmL-vbpiPMkjQ" },
          { label: "hello@buddydao.io", href: "mailto:hello@buddydao.io" },
        ]}
      />
    </div>

    <a className={styles.footer__reserved} href="" target="_blank">
      © 2022 BuddyDAO All Right Reserved
    </a>
  </footer>
);

const LinksGroup = ({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) => {
  return (
    <div className={styles.footer__links}>
      <div className={styles.footer__links__title}>{title}</div>
      <div className={styles.footer__links__content}>
        {links.map(({ href, label }) => (
          <Link key={href} className={styles.footer__links__item} href={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};
