import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Users, Shield, Trophy } from "lucide-react";

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const goals = [
    {
      icon: Heart,
      title: "Normalize Rib-Breaking",
      description: "Transform rib fractures from a feared outcome into a point of pride—a sign of proper, life-saving CPR technique."
    },
    {
      icon: Users,
      title: "Universal Training Access",
      description: "Advocate for government-sponsored free CPR/AED/First Aid training, making life-saving skills accessible to everyone 13 and older."
    },
    {
      icon: Shield,
      title: "Strengthen Good Samaritan Protections",
      description: "Educate the public about expansive legal protections that shield responders from liability when performing CPR."
    },
    {
      icon: Trophy,
      title: "Institutional Support",
      description: "Push for mandates, tax incentives, and policies that keep CPR certifications fresh and encourage regular recertification."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
            We're uniting the CPR community worldwide to overcome bystander hesitation 
            and ensure everyone has the skills and confidence to act when seconds matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-xl p-3 flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      {goal.title}
                    </h3>
                    <p className="text-cream/80 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl font-bold mb-4">
              "Go break ribs."
            </p>
            <p className="text-cream/80 text-lg">
              This is what 911 dispatchers should say when CPR is needed. 
              Not as encouragement for its own sake, but as a reminder that 
              proper chest compressions—the kind that save lives—often result in fractures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
