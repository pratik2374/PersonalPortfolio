import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "C", "Java", "Markdown"],
    },
    {
      category: "Technologies & Frameworks",
      items: [
        "Langchain",
        "Langraph",
        "Flask",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "SQL",
      ],
    },
    {
      category: "Developer Tools",
      items: [
        "VS Code",
        "Jupyter Notebook",
        "GitHub",
        "Arduino IDE",
      ],
    },
    {
      category: "Core Concepts",
      items: [
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms (DSA)",
        "Machine Learning",
        "Natural Language Processing (NLP)",
        "Data Analysis",
        "Generative AI",
        "Fine-Tuning",
      ],
    }
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
                Hi, I'm Pratik, an aspiring software engineer passionate about AI, Machine Learning, and Generative AI.
                Currently pursuing my B.Tech in Information Technology at NIT Kurukshetra, I enjoy solving complex problems
                by leveraging cutting-edge technologies and innovative engineering solutions.
              </p>

              <p className="text-muted-foreground mb-6">
                My expertise includes Python, Java, and C, along with hands-on experience in frameworks like Flask, Langchain,
                and Scikit-Learn. I have developed AI-powered applications such as an automated resume screening system, a
                RAG-based chatbot, and a documentation generator, showcasing my ability to build scalable and impactful solutions.
              </p>

              <p className="text-muted-foreground mb-6">
                With a strong foundation in object-oriented programming, data analysis, and full-stack development, I am always eager
                to learn, collaborate, and apply industry best practices. I take pride in writing efficient, maintainable code while pushing
                the boundaries of innovation.
              </p>
                <p className="text-muted-foreground mb-6">
                I'm particularly fascinated by the capabilities of large language models and their integration into real-world tools.
                Recently, I’ve been exploring LangGraph, vector databases, fine-tuning techniques, and multimodal applications that
                bridge the gap between human interaction and machine intelligence.
              </p>

              <p className="text-muted-foreground mb-6">
                Beyond coding, I’m driven by a desire to make technology more accessible and impactful. Whether it’s contributing to open-source,
                participating in hackathons, or helping peers through technical content, I’m committed to growing as both a developer and a collaborator.
                Let’s connect and create something meaningful!
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
