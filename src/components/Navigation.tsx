import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Work with me", href: "#work" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-foreground">
              Words<span className="text-primary">ThatSell</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
           <ul className="flex space-x-8 items-center">
  {navItems.map((item) => (
    <li key={item.name}>
      <a
        href={item.href}
        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
      >
        {item.name}
      </a>
    </li>
  ))}

  {/* Services (after Contact) */}
  <li>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-foreground hover:text-primary transition-colors duration-300 font-medium p-0 h-auto bg-transparent hover:bg-transparent"
        >
          Services <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background border border-border">
        <DropdownMenuItem asChild>
          <a 
            href="#linkedin-services" 
            className="cursor-pointer text-foreground hover:text-primary"
          >
            LinkedIn Services
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a 
            href="#marketing-services" 
            className="cursor-pointer text-foreground hover:text-primary"
          >
            Marketing Services
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </li>
</ul>

          </nav>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
            {navItems.map((item) => (
  <a
    key={item.name}
    href={item.href}
    className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors duration-300 font-medium rounded-md"
    onClick={() => setIsMenuOpen(false)}
  >
    {item.name}
  </a>
))}

{/* Services (after Contact) */}
<div className="px-3 py-2">
  <div className="text-foreground font-medium mb-2">Services</div>
  <a
    href="#linkedin-services"
    className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors duration-300 rounded-md ml-4"
    onClick={() => setIsMenuOpen(false)}
  >
    LinkedIn Services
  </a>
  <a
    href="#marketing-services"
    className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors duration-300 rounded-md ml-4"
    onClick={() => setIsMenuOpen(false)}
  >
    Marketing Services
  </a>
</div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;