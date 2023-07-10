type FooterLinkProps = {
  href: string;
  src: string;
};

export const FooterLink = ({ href, src }: FooterLinkProps) => {
  return (
    <a href={href}>
      <img src={src} alt="no social networks" />
    </a>
  );
};
