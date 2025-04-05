import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Film, Database } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Generative AI",
      description:
        "Skilled in building Generative AI applications that replicate user writing styles, generate content, and even create images using diffusion models. Integrated with Langchain and Groq API to deliver context-aware outputs.",
      icon: Code2,
    },
    {
      title: "Machine Learning & Data Analysis",
      description:
        "Experienced in developing ML models for intelligent automation and decision-making. Projects include ecommerce sales analysis, prediction, and voice-enabled AI assistants using Scikit-Learn, Pandas, and Langchain.",
      icon: Film,
    },
    {
      title: "Data Structures & Algorithms",
      description:
        "Strong foundation in DSA and OOP, reflected in scalable, efficient code for real-world problems. Applied concepts in projects like AI chatbots, parking automation, and more.",
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