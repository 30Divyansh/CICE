"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaRocket, FaUsers, FaCalendarCheck } from "react-icons/fa";

export const EnhancedHighlights = () => {
  return (
    <div className="max-w-screen-md mx-auto text-center space-y-6 py-6">

      {/* Events Button */}
      <Link href="/events">
        <Button
          variant="default"
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                     hover:from-purple-600 hover:to-red-600 
                     dark:from-purple-300 dark:to-red-400 
                     text-white font-semibold px-6 py-2 rounded-full shadow-lg 
                     transition-transform hover:scale-105"
        >
          🎉 Events 2025-26
        </Button>
      </Link>

      <h2
        className="text-2xl md:text-3xl font-bold 
                   bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                   dark:from-purple-300 dark:via-pink-400 dark:to-red-400 
                   bg-clip-text text-transparent animate-pulse"
      >
        Where passion meets purpose 🌟
      </h2>

      <ul className="text-xl text-muted-foreground space-y-4">
        <li className="flex items-center justify-center gap-3">
          <FaUsers className="text-pink-500 dark:text-pink-400 animate-bounce" />
          <span>Join a vibrant collective of innovators</span>
        </li>
        <li className="flex items-center justify-center gap-3">
          <FaCalendarCheck className="text-purple-500 dark:text-purple-400 animate-pulse" />
          <span>Unlock access to exclusive experiences & events</span>
        </li>
        <li className="flex items-center justify-center gap-3">
          <FaRocket className="text-red-500 dark:text-red-400 animate-spin-slow" />
          <span>Thrive with the support that fuels your journey</span>
        </li>
      </ul>
    </div>
  );
};

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <div className="text-center space-y-4 mt-10">
              <span
                className="text-4xl md:text-5xl font-extrabold tracking-widest 
                 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 
                 dark:from-fuchsia-300 dark:via-pink-400 dark:to-yellow-300 
                 bg-clip-text text-transparent animate-text-glow drop-shadow-lg 
                 motion-safe:animate-pulse"
              >
                ✨ What&apos;s up, Dream Weaver ✨
              </span>

              <p
                className="text-xl md:text-2xl font-semibold tracking-wide 
                   bg-gradient-to-r from-purple-400 to-pink-400 
                   dark:from-purple-300 dark:to-pink-300 
                   bg-clip-text text-transparent animate-fade-in"
              >
                🚀 Explore what awaits you below
              </p>

              <button
                onClick={() => window.scrollBy({ top: 600, behavior: 'smooth' })}
                className="mt-2 animate-bounce text-3xl text-pink-500 dark:text-pink-400 hover:scale-125 transition-transform"
                aria-label="Scroll down"
              >
                ⬇️
              </button>
            </div>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h2>Creativity and Innovation</h2>
            <h1>Cell In Electronics</h1>
            <span className="text-transparent px-3 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-6xl">
              CICE
            </span>
          </div>

          {/* Enhanced Section With Button */}
          <EnhancedHighlights />

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            {/* Optional Buttons */}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={theme === "light" ? "/cice.png" : "/cice.png"}
            alt="dashboard"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
