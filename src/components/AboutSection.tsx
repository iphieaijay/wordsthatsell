import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Clock, Target, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "500+",
      label: "Clients Served"
    },
    {
      icon: <Target className="w-6 h-6" />,
      number: "95%",
      label: "Success Rate"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "50M+",
      label: "Content Views"
    }
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Every strategy is designed with measurable outcomes in mind. No vanity metrics, just real business growth."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education-First",
      description: "I believe in empowering clients with knowledge, not creating dependency. You'll understand the why behind every strategy."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Focus",
      description: "No scatter-gun approach. We identify the highest-impact activities and execute them with precision."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background" style={{backgroundColor:'#ffd6d8'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main about content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image placeholder - using uploaded image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <img 
                src="/lovable-uploads/4b80fe34-9703-4b12-91f3-59beea32ed30.png" 
                alt="Dorcas - Professional portrait"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-glow">
              <p className="font-bold text-lg">500+ Clients</p>
              <p className="text-sm opacity-90">Served Globally</p>
            </div>
          </div>

          {/* About content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet <span className="text-primary">Dorcas</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm a strategic content and sales specialist who helps ambitious entrepreneurs build profitable businesses without the chaos, burnout, or endless guesswork that usually comes with growth.
              </p>
              <p>
                After working with 500+ clients across various industries, I've identified the exact patterns that separate struggling businesses from thriving ones. It's not about working harder—it's about working strategically.
              </p>
              <p>
                My approach combines data-driven strategy with authentic storytelling to create content and sales systems that actually convert. No fluff, no overnight promises—just proven frameworks that deliver lasting results.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="glowing" size="lg">
                Work With Me
              </Button>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6 border-border bg-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-primary mb-3 flex justify-center">
                  {achievement.icon}
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{achievement.number}</p>
                <p className="text-sm text-muted-foreground">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            My <span className="text-primary">Core Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;