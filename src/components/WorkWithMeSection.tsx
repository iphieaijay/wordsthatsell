import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageCircle, Users, Zap } from "lucide-react";

const WorkWithMeSection = () => {
  const workOptions = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "1:1 Strategy Sessions",
      description: "Personalized strategy sessions to tackle your specific challenges and create actionable growth plans.",
      duration: "90 minutes",
      price: "Starting at $297",
      features: [
        "Complete business audit",
        "Custom strategy roadmap",
        "Implementation timeline",
        "Follow-up support"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Done-With-You Programs",
      description: "Work alongside me to implement proven systems while learning the strategies for long-term success.",
      duration: "3-6 months",
      price: "Custom pricing",
      features: [
        "Weekly strategy calls",
        "Content creation support",
        "Real-time feedback",
        "Comprehensive training"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Done-For-You Services",
      description: "Let me handle the heavy lifting while you focus on running your business and serving your clients.",
      duration: "Ongoing",
      price: "Project-based",
      features: [
        "Complete content creation",
        "LinkedIn management",
        "Sales copy writing",
        "Campaign optimization"
      ]
    }
  ];

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the collaboration style that fits your business needs and growth stage. Every option is designed to deliver measurable results.
          </p>
        </div>

        {/* Work options grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {workOptions.map((option, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border relative overflow-hidden">
              {/* Highlight badge for middle option */}
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {option.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {option.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {option.description}
                </CardDescription>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Duration: {option.duration}</p>
                  <p className="text-lg font-semibold text-primary">{option.price}</p>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-foreground">
                      <MessageCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={index === 1 ? "glowing" : "hero"} 
                  size="lg" 
                  className="w-full"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-card p-8 rounded-2xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Not Sure Which Option Is Right for You?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a free 15-minute discovery call to discuss your goals and find the perfect collaboration style for your business.
          </p>
          <Button variant="outline" size="lg">
            Schedule Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMeSection;