import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Github } from "lucide-react"

export default function ImageCards() {
  const cards = [
    {
      image: "/project1.png?height=400&width=600",
      title: "This Website",
      description: "-Frontend-",
      link: "https://github.com/NikolaBundic/Personal-Website"
    },
    {
      image: "/project2.png?height=400&width=600",
      title: "Music service",
      description: "-Backend-",
      link: "https://github.com/NikolaBundic/Music-Service"
    },
    {
      image: "/project3.png?height=400&width=600",
      title: "PoolUP!",
      description: "-Video game-",
      link: "https://eleventhduck.itch.io/poolup"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold">Projects</h2>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Link key={index} href={card.link} passHref>
            <Card className="h-64 overflow-hidden relative group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:blur-sm"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <br />
      <h2 className="text-1xl font-bold pb-3">For more project</h2>
      <a href="https://github.com/NikolaBundic"><Github className="w-7 h-7" /></a>  
    </div>
  )
}