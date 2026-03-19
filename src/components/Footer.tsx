const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary/50 border-t border-border">
      <div className="container-wide text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear}  Katarina Zdravković | Psihoterapeut u superviziji | Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
