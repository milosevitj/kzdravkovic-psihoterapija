import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#pocetna', label: 'Početna' },
  { href: '#o-meni', label: 'O meni' },
  { href: '#psihoterapija', label: 'Psihoterapija i savetovanje' },
  { href: '#beleske', label: 'Beleške' },
  { href: '#kontakt', label: 'Kontakt' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Ova linija menja URL hash bez reload-a
      window.history.pushState(null, '', href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-header py-4' : 'bg-background/60 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <a
          href="#pocetna"
          onClick={(e) => handleNavClick(e, '#pocetna')}
          className="text-xl font-medium text-foreground hover:text-primary transition-colors"
        >
          Katarina Zdravković
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden glass-header mt-2 py-4">
          <div className="container-wide flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
