import { Container, FooterLink } from "components/atoms";
import React from "react";

const FooterLinks = () => {
  return (
    <div className="py-3 mb-1 xl:mb-0">
      <Container className="mx-auto flex flex-col xl:flex-row items-center justify-start">
        <FooterLink>Overview</FooterLink>
        <FooterLink>Docs</FooterLink>
        <FooterLink>Extend</FooterLink>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Security</FooterLink>
        <FooterLink>Press Kit</FooterLink>
        <FooterLink>Consent Manager</FooterLink>
      </Container>
    </div>
  );
};

export default FooterLinks;
