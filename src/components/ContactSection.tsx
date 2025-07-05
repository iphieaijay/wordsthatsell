import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Calendar, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "For general inquiries and project discussions",
      detail: "hello@wordsthatsel.com",
      action: "Send Email"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Strategy Call",
      description: "Book a free 15-minute discovery call",
      detail: "Available Mon-Fri, 9AM-5PM EST",
      action: "Book Call"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Connect with me for quick questions",
      detail: "@dorcas-words",
      action: "Connect"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Start the <span className="text-primary">Conversation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with strategic content and sales optimization? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div>
            <Card className="border-border bg-background">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Tell me about your project and goals. I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-foreground">Company</Label>
                  <Input id="company" placeholder="Your Company" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-foreground">Service Interest</Label>
                  <select className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md text-foreground">
                    <option>LinkedIn Strategy</option>
                    <option>Full-Funnel Content</option>
                    <option>Sales Optimization</option>
                    <option>Brand Messaging</option>
                    <option>Growth Strategy</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your business goals and challenges..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                
                <Button variant="glowing" size="lg" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact methods */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Other Ways to Connect</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="border-border bg-background hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                          <p className="text-sm text-foreground font-medium mb-3">{method.detail}</p>
                          <Button variant="outline" size="sm">
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Location */}
            <Card className="border-border bg-background">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground mb-2">Based in Toronto, Canada</p>
                    <p className="text-sm text-foreground">Serving clients globally across all time zones</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h4 className="font-bold text-foreground mb-3">Quick FAQ</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">How quickly do you respond?</p>
                  <p className="text-muted-foreground">Within 24 hours on business days</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">What's your typical project timeline?</p>
                  <p className="text-muted-foreground">2-6 weeks depending on scope and complexity</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Do you work with small businesses?</p>
                  <p className="text-muted-foreground">Yes! I work with businesses of all sizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;