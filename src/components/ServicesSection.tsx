import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Target, TrendingUp, MessageSquare, BarChart3 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "LinkedIn Strategy",
      description: "Complete LinkedIn optimization and content strategy to build your personal brand and generate leads.",
      features: [
        "Profile optimization",
        "Content calendar creation",
        "Engagement strategies",
        "Lead generation tactics"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Full-Funnel Content",
      description: "End-to-end content creation that guides prospects from awareness to conversion.",
      features: [
        "Blog posts & articles",
        "Email sequences",
        "Sales copy",
        "Social media content"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sales Optimization",
      description: "Strategic sales processes and copy that convert prospects into paying customers.",
      features: [
        "Sales page copy",
        "Email marketing",
        "Conversion optimization",
        "Sales funnel design"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Brand Messaging",
      description: "Clear, compelling messaging that resonates with your target audience and drives action.",
      features: [
        "Brand voice development",
        "Messaging framework",
        "Value proposition",
        "Competitive positioning"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Growth Strategy",
      description: "Data-driven growth strategies that scale your business without the guesswork.",
      features: [
        "Market analysis",
        "Growth planning",
        "Performance tracking",
        "Strategic consulting"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services That <span className="text-primary">Deliver Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I help ambitious founders and service providers build profitable businesses through strategic content and sales optimization.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-background">
              <CardHeader>
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how my proven strategies can help you achieve your growth goals without the overwhelm.
          </p>
          <Button variant="glowing" size="xl">
            Book a Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;