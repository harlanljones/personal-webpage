'use client'

import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HelpCircle } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const initialThemeSet = useRef(false);

  useEffect(() => {
    if (!initialThemeSet.current) {
      const currentHour = new Date().getHours();
      setTheme(currentHour >= 18 || currentHour < 6 ? 'dark' : 'light');
      initialThemeSet.current = true;
    }
  }, [setTheme]);

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-1">
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary-foreground">
            <img
              src="/baseball.svg"
              alt="Icon"
              className="h-9 w-9 object-contain"
            />
          </div>
          <span className="text-xl font-bold">Harlan Jones</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium hover:text-secondary transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-secondary transition-colors">
            Projects
          </a>
          <a href="#blog" className="text-sm font-medium hover:text-secondary transition-colors">
            Blog
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-secondary transition-colors">
            Contact
          </a>
          <div className="flex items-center gap-2">
            {mounted && (
              <>
                <Button
                  onClick={toggleTheme}
                  variant="outline"
                  size="sm"
                >
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-5 w-5 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>The theme automatically adjusts based on your local time (dark after 6 PM).</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </>
            )}
          </div>
        </nav>

        <div className="md:hidden relative inline-block">
          <Button onClick={() => setIsOpen(!isOpen)} variant="outline" size="sm" className="bg-transparent">
            Menu
            <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 ml-1">
              <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
           </svg>
          </Button>
          {isOpen && (
            <div className="absolute w-48 block bg-popover text-popover-foreground border right-0 origin-top-right rounded-md flex-col py-1 shadow-lg">
              <a href="#about" className="block px-4 py-2 text-sm hover:bg-accent transition-colors" onClick={() => setIsOpen(false)}>
                About
              </a>
              <a href="#projects" className="block px-4 py-2 text-sm hover:bg-accent transition-colors" onClick={() => setIsOpen(false)}>
                Projects
              </a>
              <a href="#blog" className="block px-4 py-2 text-sm hover:bg-accent transition-colors" onClick={() => setIsOpen(false)}>
                Blog
              </a>
              <a href="#contact" className="block px-4 py-2 text-sm hover:bg-accent transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </a>
              <div className="border-t my-1"></div>
              {mounted && (
                <div className="flex items-center justify-between gap-2 px-4 py-2">
                    <Button
                        onClick={toggleTheme}
                        variant="outline"
                        size="sm"
                        className="flex-grow"
                    >
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                    <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger>
                            <HelpCircle className="h-5 w-5 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>The theme automatically adjusts based on your local time (dark after 6 PM).</p>
                        </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
