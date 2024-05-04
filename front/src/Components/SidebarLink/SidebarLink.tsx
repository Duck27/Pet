import React from "react";
import Link from "next/link";

type SidebarLinkProps = {
  href: string;
  src: string;
  alt: string;
  title: string;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, src, alt, title }) => (
  <Link href={href}>
    <img src={src} alt={alt} title={title} />
  </Link>
);

export default SidebarLink;
