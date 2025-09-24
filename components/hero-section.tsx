'use client'

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  const downloadResume = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = `Harlan_Jones_Resume_${formattedDate}.pdf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden fenway-hero-bg">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white drop-shadow-2xl leading-tight">
            Developing{" "}
            <span className="text-primary-foreground bg-primary px-2 py-1 rounded shadow-lg">Green Monster</span>
            Apps
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 text-pretty drop-shadow-xl font-medium">
            Recent Boston University graduate ardent about expanding machine learning within the sports industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-primary hover:bg-primary/90 green-monster-shadow text-primary-foreground font-semibold"
            >
              View the Highlights
            </Button>
            
            <Button
              onClick={scrollToContact}
              size="lg"
              className="text-lg px-8 border-white border-2 text-white hover:bg-white hover:text-foreground bg-black/30 backdrop-blur-sm font-semibold"
            >
              Step Up to the Plate
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg px-8 py-3 border border-primary/50 shadow-xl">
          <div className="flex items-center gap-6 text-sm font-mono">
            <span className="text-secondary font-bold text-lg">FENWAY PARK</span>
            <span className="text-white/90">EST. 1912</span>
          </div>
        </div>
      </div>
    </section>
  )
}
