import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Film, Database } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      description: "I am a web developer specializing in Full-stack development, with a knack for crafting clean, maintainable code and seamless user experiences.",
      icon: Code2,
    },
    {
      title: "3-D animations",
      description: "I'm a 3D animator with a passion for bringing characters and environments to life. I specialize in creating captivating animations that combine technical precision with artistic creativity.",
      icon: Film,
    },
    {
      title: "Data structures",
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
                <Card className="h-full hover:shadow-lg transition-shadow">
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
