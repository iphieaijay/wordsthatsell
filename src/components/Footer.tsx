import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MessageSquare, Users, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "LinkedIn Strategy", href: "#services" },
      { name: "Full-Funnel Content", href: "#services" },
      { name: "Sales Optimization", href: "#services" },
      { name: "Brand Messaging", href: "#services" },
      { name: "Growth Strategy", href: "#services" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Work With Me", href: "#work" },
      { name: "Case Studies", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Resources", href: "#" }
    ],
    connect: [
      { name: "LinkedIn", href: "#", icon: <Users className="w-4 h-4" /> },
      { name: "Twitter", href: "#", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Instagram", href: "#", icon: <ExternalLink className="w-4 h-4" /> },
      { name: "Email", href: "mailto:hello@wordsthatsel.com", icon: <Mail className="w-4 h-4" /> }
    ]
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 p-8 bg-gradient-primary rounded-2xl text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Join hundreds of successful entrepreneurs who've grown their businesses with strategic content and sales optimization.
          </p>
          <Button variant="secondary" size="xl">
            Start Your Growth Journey
          </Button>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Words<span className="text-primary">ThatSell</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Strategic content and sales optimization for ambitious entrepreneurs who want to grow without chaos, burnout, or guesswork.
            </p>
            <div className="flex space-x-4">
              {footerLinks.connect.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Get weekly growth insights delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-card border border-border rounded-md text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="outline" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} WordsThatSell. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;