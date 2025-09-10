import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-64 h-64 mx-auto mb-8 md:mb-0">
                <div className="w-full h-full rounded-full bg-card border-4 border-primary overflow-hidden relative">
                  <img
                    src="/headshot.jpg"
                    alt="Harlan Jones - Software Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/60"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years of Baseball Obsession</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">7</div>
                    <div className="text-sm text-muted-foreground">Days a Week</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-justify">
                I grew up learning about the game of baseball by calling games from behind the plate.
                Now, I call functions to accomplish the same goal. While pursuing a B.S. in Computer 
                Engineering, I have become deeply engrossed in the past, present, and future of both
                technology and the Boston Red Sox.
              </p>

              <p className="text-lg leading-relaxed text-justify">
                When I'm not crafting solutions with Python, React, or cloud services, you'll find me 
                ingesting information by watching games, reading articles, or playing Out of the Park 
                Baseball. I am always looking for new ways to expand my knowledge and the variety of
                perspectives teach me to look at things holistically, valuing analytics, individuals,
                and everything in between.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
