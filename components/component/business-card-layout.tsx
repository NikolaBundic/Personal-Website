import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Calendar, Clapperboard } from "lucide-react"

export default function BusinessCard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <Avatar className="w-32 h-32 mx-auto">
              <AvatarImage alt="Nikola Bundic" src="/pfp.png?height=128&width=128" />
            </Avatar>
            <CardTitle className="mt-4 text-2xl font-bold">Nikola Bundic</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span>21.02.2002.</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span>nikolabundic@gmail.com</span>
            </div>
            <br />
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon">
                <a href="mailto:nikolabundic@gmail.com"><Mail className="w-4 h-4" /></a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="https://github.com/NikolaBundic"><Github className="w-4 h-4" /></a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="https://letterboxd.com/Dzon1X/"><Clapperboard className="w-4 h-4" /></a>
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">About Nikola</h1>
          <p className="text-muted-foreground">
          I am a highly motivated IT professional with a strong interest in software development and IT infrastructure. 
          Ready to tackle any new challenge that demands my skills and experience. 
          Proficient in analyzing and solving complex problems with the ability to quickly adopt new technologies.
          </p>
          <p className="text-muted-foreground">
          With a knack for staying ahead of the tech curve, I pride myself on my continuous learning journey. 
          Whether it’s developing robust software applications or managing intricate IT infrastructures, I bring dedication, creativity, and a passion for excellence.
          </p>
        </div>
      </div>
    </div>
  )
}