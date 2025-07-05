import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MessageSquare, Users, Star, TrendingUp } from "lucide-react";

const SocialsSection = () => {
  const socialPlatforms = [
    {
      platform: "LinkedIn",
      handle: "@dorcas-words",
      followers: "25K+",
      description: "Professional insights, strategy tips, and behind-the-scenes content for ambitious entrepreneurs.",
      icon: <Users className="w-6 h-6" />,
      stats: "95% engagement rate",
      link: "#"
    },
    {
      platform: "Twitter",
      handle: "@wordsthatselI",
      followers: "12K+", 
      description: "Quick tips, industry insights, and real-time thoughts on marketing and sales strategies.",
      icon: <MessageSquare className="w-6 h-6" />,
      stats: "Top 1% in business category",
      link: "#"
    },
    {
      platform: "Instagram",
      handle: "@wordsthatselI",
      followers: "8K+",
      description: "Visual storytelling, client wins, and personal brand inspiration for service providers.",
      icon: <Star className="w-6 h-6" />,
      stats: "5x industry avg engagement",
      link: "#"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Founder",
      content: "Following Dorcas transformed my LinkedIn strategy. I went from 0 to 15K followers and 3x'd my leads in 6 months.",
      platform: "LinkedIn"
    },
    {
      name: "Marcus Johnson",
      role: "Business Coach",
      content: "Her content strategies are gold. Every post she shares gives me new ideas to implement immediately.",
      platform: "Twitter"
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      content: "The insights Dorcas shares are practical and actionable. My team and I follow her religiously.",
      platform: "Instagram"
    }
  ];

  return (
    <section id="socials" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Follow for <span className="text-primary">Daily Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of entrepreneurs who get actionable business growth strategies delivered daily. No fluff, just results.
          </p>
        </div>

        {/* Social platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialPlatforms.map((social, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-background">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {social.platform}
                </CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {social.handle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-foreground">{social.followers}</p>
                  <p className="text-sm text-muted-foreground">{social.stats}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {social.description}
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary">
                  Follow Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social proof */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            What My Community Says
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border">
                <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <span className="text-xs text-primary font-medium">{testimonial.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="text-center bg-gradient-primary p-8 rounded-2xl text-primary-foreground">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            Get Weekly Growth Insights
          </h3>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Join 10,000+ entrepreneurs getting exclusive strategies, case studies, and actionable tips delivered to their inbox every Tuesday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-foreground bg-background border-0 focus:ring-2 focus:ring-accent w-full sm:w-auto"
            />
            <Button variant="secondary" size="lg" className="rounded-full w-full sm:w-auto">
              Subscribe Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;