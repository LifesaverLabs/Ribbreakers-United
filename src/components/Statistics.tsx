import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      value: "20-30%",
      label: "of CPR cases involve rib or sternum fractures",
      description: "This is normal and expected with quality CPR"
    },
    {
      value: "80%",
      label: "of elderly patients experience fractures during CPR",
      description: "A necessary consequence of life-saving compressions"
    },
    {
      value: "88%",
      label: "our target training rate for people 13+",
      description: "No more than 5 years since last certification"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Reality of Quality CPR
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Breaking ribs isn't a mistake—it's a sign you're applying enough force to save a life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-bold transition-all duration-300 border-2 border-border hover:border-primary"
            >
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                {stat.value}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
