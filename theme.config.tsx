import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="font-bold">AITC International</span>,
  project: {
    link: "https://github.com/broisnischal/aitc-guideline",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/broisnischal/aitc-guideline",
  footer: {
    text: "Copyright © 2022 AITC International. All rights reserved.",
  },
  banner: {
    text: "We are under construction!",
  },
  notFound: {
    labels: "Page Not Found",
    content: "Sorry, the page you visited does not exist.",
  },
  sidebar: {
    titleComponent: (props) => (
      <h1 className="text-2xl font-bold">{props.title}</h1>
    ),
    autoCollapse: false,
    toggleButton: true,
  },
  toc: {
    title: "Table of Contents",
    float: true,
  },
  nextThemes: {},
  primaryHue: {
    dark: 10,
    light: 30,
  },
};

export default config;
