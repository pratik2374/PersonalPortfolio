import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/pratik2374",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
      description: "Check out my code repositories"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pratikgond/",
      color: "hover:text-blue-600",
      description: "Connect with me on LinkedIn"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:pratikgond2005@gmail.com",
      color: "hover:text-red-500",
      description: "Reach out directly for project inquiries and collaborations"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Connect With Me</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out through any of these platforms.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-2 border-transparent hover:border-green-500 transition-all duration-300 shadow-md">
                    <CardContent className="p-6 flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center mb-4 transition-colors duration-200 ${link.color}`}>
                        <link.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{link.name}</h3>
                      <p className="text-muted-foreground text-center text-sm mb-4">{link.description}</p>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-primary hover:text-green-500 transition-colors duration-200 font-medium text-sm`}
                      >
                        Connect →
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}