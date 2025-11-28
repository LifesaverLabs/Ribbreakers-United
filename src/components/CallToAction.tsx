import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, GraduationCap, Heart, Smartphone } from "lucide-react";

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed">
            Every person trained in CPR is another potential life-saver. 
            Together, we can build a community where everyone has the skills 
            and confidence to act when someone's heart stops.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-bold border-2 border-primary-foreground/20 hover:border-primary-foreground/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary rounded-lg p-3">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Get Trained
              </h3>
            </div>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Find CPR/AED/First Aid certification courses in your area. 
              Make sure your certification is less than 5 years old.
            </p>
            <div className="space-y-3">
              <Button 
                asChild
                className="bg-primary hover:bg-crimson-dark text-primary-foreground font-bold w-full group"
                size="lg"
              >
                <a href="https://cpr.heart.org/en/course-catalog-search" target="_blank" rel="noopener noreferrer">
                  Find Training Near You
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="w-full group border-primary text-foreground hover:bg-primary/10"
                size="lg"
              >
                <a href="https://teardownthisfirewall.org" target="_blank" rel="noopener noreferrer">
                  Tear Down This Firewall
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Download PulsePoint
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    asChild
                    variant="secondary"
                    className="w-full"
                    size="sm"
                  >
                    <a href="https://apps.apple.com/us/app/pulsepoint-respond/id500772134" target="_blank" rel="noopener noreferrer">
                      iOS
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="secondary"
                    className="w-full"
                    size="sm"
                  >
                    <a href="https://play.google.com/store/apps/details?id=mobi.firedepartment" target="_blank" rel="noopener noreferrer">
                      Android
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 shadow-bold border-2 border-primary-foreground/20 hover:border-primary-foreground/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary rounded-lg p-3">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Support Our Cause
              </h3>
            </div>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Help us advocate for universal CPR training, institutional mandates, 
              and policies that keep certifications fresh.
            </p>
            <Button 
              variant="secondary"
              className="bg-charcoal hover:bg-charcoal/90 text-primary-foreground font-bold w-full group"
              size="lg"
            >
              Learn How to Help
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-primary-foreground">
            Remember: Breaking ribs to save lives is a necessary civic duty to our neighbors and community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
