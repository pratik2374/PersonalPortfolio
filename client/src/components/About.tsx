import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const skills = [
    { category: "Languages", items: ["JavaScript", "Python", "HTML", "CSS", "Java", "C"] },
    { category: "Frameworks/Libraries", items: ["React", "Angular", "Vue", "Django"] },
    { category: "Tools", items: ["Git", "Docker", "Visual Studio Code"] },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-6">
                Hi, I'm Pratik, a passionate web developer and coder with a knack for creating seamless
                and engaging user experiences. With 5 years of experience in the tech world, I specialize
                in Full-stack development, and I'm well-versed in a variety of programming languages and
                frameworks.
              </p>
              <p className="text-muted-foreground">
                I take pride in building scalable and maintainable code, with a focus on clean architecture
                and best practices. I enjoy solving complex problems and bringing innovative solutions to
                the table.
              </p>
            </div>
            <div className="grid gap-4">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
