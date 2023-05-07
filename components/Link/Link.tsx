import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./Link.module.scss";

export const Link = ({
  className,
  href,
  children,
}: PropsWithChildren<{ className?: string; href: string }>) => {
  return (
    <a className={classNames(styles.link, className)} href={href}>
      {children}
    </a>
  );
};
