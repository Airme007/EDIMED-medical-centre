import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-card shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://t3.ftcdn.net/jpg/03/24/58/44/360_F_324584485_qtdluDzmBNkJvmntEPlNeG1htwPktgCa.jpg"
              alt="EDIMED Medical Centre Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <h1 className="font-serif font-bold text-xl text-blue-700">EDIMED</h1>
              <p className="text-xs text-muted-foreground text-red-700">Medical Centre</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+2349029728060" className="flex items-center text-primary hover:text-primary/80 transition-smooth">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">+234 902 972 8060</span>
            </a>
            <Link to="/contact">
              <Button className="gradient-hero">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+2349029728060"
                className="flex items-center text-primary hover:text-primary/80 transition-smooth"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">+234 902 972 8060
                </span>
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="gradient-hero w-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
