import type { NextPage } from "next";
import Head from "next/head";
import { Nav, NavItem } from "../components/Nav";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { GetStarted } from "../components/GetStarted";
import { Protected } from "../components/Protected";
import { App } from "../components/App";
import { Team } from "../components/Team";
import { Partners } from "../components/Partners";
import { Footer } from "../components/Footer";

import { AppUrl, WhitePaperHref } from "../constants";

import styles from "./index.module.scss";

const navs: NavItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contributors",
    href: "#contributors",
  },
  {
    label: "White Paper",
    href: WhitePaperHref,
    type: "secondary",
    target: "_blank",
  },
  {
    label: "How it works",
    href: "#get-started",
    type: "secondary",
  },
  {
    label: "Launch App",
    href: AppUrl,
    type: "primary",
    target: "_blank",
  },
];

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buddy</title>
        <meta name="description" content="Buddy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav navs={navs} />

      <main className={styles.main}>
        <Home />

        <About />

        <GetStarted />

        <Protected />

        <App />

        <Team />

        <Partners />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
