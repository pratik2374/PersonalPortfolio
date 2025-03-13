import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Film, Database } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Generative AI",
      description: "I have very good skills in Generative AI, specializing in creating innovative AI models and applications that push the boundaries of what's possible.",
      icon: Code2,
    },
    {
      title: "Machine Learning",
      description: "With profound experience in Machine Learning, I excel in developing and deploying ML models that drive intelligent decision-making and automation.",
      icon: Film,
    },
    {
      title: "Data Structures",
      description: "I'm a software engineer with a deep understanding of data structures and algorithms. My expertise lies in designing efficient and scalable solutions for complex problems.",
      icon: Database,
    },
  ];

  return (
    <section id="services" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-transparent transition-all duration-300 hover:shadow-lg hover:border-green-500">
                  <CardHeader>
                    <service.icon className="w-12 h-12 mb-4 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}