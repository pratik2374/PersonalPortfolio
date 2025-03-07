import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "portfolio", label: "Portfolio" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold">Pratik</span>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary"
            >
              <Button variant="ghost">{item.label}</Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
