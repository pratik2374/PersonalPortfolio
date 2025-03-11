import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import one from "@/components/image/one.png";
import two from "@/components/image/two.png";
import three from "@/components/image/three.png";
import four from "@/components/image/four.png";
import five from "@/components/image/five.png";
import six from "@/components/image/six.png";



export default function Portfolio() {
  const projects = [
    {
      title: "LinkedIn Post Generator",
      description: "An AI-powered system that analyzes writing patterns and generates LinkedIn posts using LangChain.",
      image: one,
      link: "https://github.com/pratik2374/linkedin-post-genaror-with-image",
    },
    {
      title: "AI Resume Screening App",
      description: "An AI-powered resume screening tool that classifies candidates based on job descriptions and exports data.",
      image: two,
      link: "https://github.com/pratik2374/AI-Resume_Screening-app",
    },
    {
      title: "Car Parking System",
      description: "A smart IoT-based car parking system using YOLO, OpenCV, ESP32, and ThingSpeak. that contribute together for smart and effient car parking system",
      image: three,
      link: "https://github.com/pratik2374/Automated-Car-parking-system",
    },
    {
      title: "Documentation Generator",
      description: "A Python documentation generator using AST, Tree-Sitter, and ChatGroq API for auto-generated docstrings.",
      image: four,
      link: "https://github.com/pratik2374/documentaion-writer",
    },
    {
      title: "Sales Data Analysis",
      description: "A data analysis project identifying top-selling products and sales trends using Pandas and Seaborn.",
      image: five,
      link: "https://github.com/pratik2374/Data-analyis-Ecommerce-Sales-and-Prediction",
    },  
    {
      title: "Chatbot with AI Agents",
      description: "An AI chatbot that processes PDFs and uses external agents like search engines and Wikipedia to adrres the query effciently by user.",
      image: six,
      link: "https://github.com/pratik2374/pdf_chatbot",
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="flex flex-col h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}