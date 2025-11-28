import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck } from "lucide-react";

const GoodSamaritan = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-primary rounded-full p-6">
              <ShieldCheck className="w-16 h-16 text-primary-foreground" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
            You're Protected by Law
          </h2>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border-2 border-border">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              <span className="font-bold text-primary">Good Samaritan laws</span> protect 
              people who provide emergency medical assistance to those who are injured or 
              in danger. These protections are expansive and exist specifically to encourage 
              bystanders to act without fear of legal consequences.
            </p>

            <div className="bg-muted rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What This Means for CPR
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <span className="text-lg">
                    <strong>Rib fractures are expected:</strong> When someone is unresponsive 
                    and not breathing normally, proper chest compressions require significant 
                    force—often resulting in broken ribs, especially in elderly patients.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <span className="text-lg">
                    <strong>You won't be sued:</strong> Good Samaritan protections shield you 
                    from liability when you're acting in good faith to save a life during a 
                    cardiac emergency.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <span className="text-lg">
                    <strong>Don't hesitate:</strong> Bystander hesitation driven by fear of 
                    causing harm costs lives. The law recognizes this and protects those who step up.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
              <p className="text-xl font-bold text-foreground mb-2">
                The Bottom Line
              </p>
              <p className="text-lg text-muted-foreground">
                If you break ribs while performing CPR on someone in cardiac arrest, 
                it's a sign you're doing it correctly. It's not just acceptable—it's 
                necessary. And the law protects you for taking that life-saving action.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoodSamaritan;
