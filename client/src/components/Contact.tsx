import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/pratik",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/pratik",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:pratik@example.com",
      color: "hover:text-red-500",
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
          <h2 className="text-3xl font-bold mb-12 text-center">Connect With Me</h2>

          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-transparent hover:border-green-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center space-x-8">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted-foreground transition-colors duration-200 ${link.color} group`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <link.icon className="w-8 h-8" />
                        <span className="text-sm font-medium">{link.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}