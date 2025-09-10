import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    title: "Coming Soon",
    description: "",
    date: "",
    readTime: "",
    category: "",
  },
  {
    title: "Coming Soon",
    description: "",
    date: "",
    readTime: "",
    category: "",
  },
  {
    title: "Coming Soon",
    description: "",
    date: "",
    readTime: "",
    category: "",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Latest Posts</h2>

          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path
                            d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                          />
                          <path
                            d="M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                          />
                        </svg>
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base">{post.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
