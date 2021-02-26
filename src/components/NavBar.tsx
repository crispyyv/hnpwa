import React, { useState } from "react";
import { links } from "src/constants";
import { useType } from "src/context/typeContext";
import { Link, Navigation } from "./styled/navigation";

export const Navbar = (): JSX.Element => {
  const { type, saveType } = useType();
  return (
    <Navigation>
      {links.map((link, idx) => (
        <Link active={link === type} key={idx} onClick={() => saveType(link)}>
          {link[0].toUpperCase() + link.substring(1)}
        </Link>
      ))}
    </Navigation>
  );
};
