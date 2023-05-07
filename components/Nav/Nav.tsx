import type { AnchorHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import Image from "next/image";
import { forwardRef } from "react";
import Popup from "reactjs-popup";
import styles from "./Nav.module.scss";
import classNames from "classnames";

interface NavProps {
  navs: Array<NavItem>;
}

export function Nav({ navs }: NavProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <Image src="/logo.png" width={217} height={120} alt="logo" />
      </div>
      <div className={styles.nav__right}>
        <Menu navs={navs} />
        <div className={styles.nav__large_nav}>
          <ul className={styles.nav__list}>
            {navs.map(({ href, label, type, target }) => {
              return (
                <li key={href}>
                  <a
                    href={href}
                    target={target}
                    rel={target === "_blank" ? "noreferrer" : undefined}
                  >
                    {type === "secondary" || type === "primary" ? (
                      <NavButton type={type}>{label}</NavButton>
                    ) : (
                      <div className={styles.nav__item}>{label}</div>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// ----------- NavItem
export interface NavItem {
  label: ReactNode;
  href: string;
  type?: "default" | "secondary" | "primary";
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
}

// eslint-disable-next-line react/display-name
const NavButton = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ type?: "secondary" | "primary" }>
>(({ children, type = "secondary" }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        styles.nav__button,
        {
          secondary: styles["nav__button--secondary"],
          primary: styles["nav__button--primary"],
        }[type]
      )}
    >
      {children}
    </div>
  );
});

const Menu = ({ navs }: { navs: Array<NavItem> }) => {
  const children = ((close: () => void) => (
    <div
      className={styles.nav__menu_content}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ul className={styles.nav__menu_list}>
        {navs.map(({ href, label }) => {
          return (
            <li key={href} onClick={close}>
              <a href={href}>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  )) as any; // type error
  return (
    <Popup
      arrow={false}
      modal
      contentStyle={{ margin: 0, position: "absolute" }}
      trigger={
        <div className={styles.nav__menu}>
          <NavButton>Menu</NavButton>
        </div>
      }
    >
      {children}
    </Popup>
  );
};
