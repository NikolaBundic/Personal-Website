import { Badge } from "@/components/ui/badge"

const technologies = [
  "Java",
  "C#",
  "Python",
  "HTML",
  "CSS",
  "JS/TS"
]

export default function TechPills() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold">Technologies</h2>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {technologies.map((tech, index) => (
          <Badge
            key={index}
            variant="outline"
            className="text-lg py-2 justify-center transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}