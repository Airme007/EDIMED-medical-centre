import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <img
                    src="https://t3.ftcdn.net/jpg/03/24/58/44/360_F_324584485_qtdluDzmBNkJvmntEPlNeG1htwPktgCa.jpg"
                    alt="EDIMED Medical Centre Logo"
                    className="w-10 h-10 rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-foreground">EDIMED</h3>
                <p className="text-xs text-muted-foreground">Medical Centre</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted community healthcare partner, providing comprehensive medical services with compassion and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">New Stadium Road, Ikot Ekpene, Akwa Ibom State, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <a href="tel:+2349029728060" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  +234 902 972 8060
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-primary mr-2" />
                <a href="mailto:nsikakudeme@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  nsikakudeme@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Opening Hours</h4>
            {/* <ul className="space-y-2"> */}
              {/* <li className="flex items-start">
                <Clock className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium">Mon - Fri</p>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium">Saturday</p>
                  <p>9:00 AM - 2:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium">Sunday</p>
                  <p>Closed</p>
                </div>
              </li>
            // </ul> */}
            <p className="text-sm text-destructive font-medium mt-4">
              24/7 Available
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} EDIMED Medical Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
