"use client";

import { Button } from "@/components/ui/button";
import "./events.css"; // Custom CSS file for timeline styles

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-red-500 dark:from-pink-300 dark:to-red-400 bg-clip-text text-transparent mb-6">
        🎊 Welcome to Events 2025-26
      </h1>

      <p className="text-lg text-muted-foreground max-w-xl text-center mb-10">
        Stay tuned for a spectacular lineup of workshops, hackathons, meetups, and much more. We are crafting unforgettable moments just for you!
      </p>

      {/* Timeline */}
      <div className="timeline">
        <div className="outer">
          {/* Event 1 */}
          <div className="card">
            <div className="info">
              <h3 className="title">Code-CTRL – 28th April | CL01</h3>
              <p>
                Take control and dive into the world of code with Code-CTRL—an adrenaline-pumped CSE gaming event that challenges your logic, programming skills, and problem-solving instincts. Whether it is decoding challenges, algorithm battles, or system-based puzzles, this is your arena to lead, command, and conquer.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="card">
            <div className="info">
              <h3 className="title">Innoverse – 29th April | JBS Atrium</h3>
              <p>
                Step into the Innoverse—a dynamic universe of student innovations and technological breakthroughs. From smart prototypes to futuristic concepts, this exhibition is where creativity meets execution.
              </p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="card">
            <div className="info">
              <h3 className="title">Unboxed – 29th April | LT4</h3>
              <p>
                Get ready to think beyond the binary with Unboxed—a tech talk designed to shatter conventional thought. Hear from visionary speakers and passionate innovators as they share their unconventional approaches to shaping the digital world.
              </p>
            </div>
          </div>

          {/* Event 4 */}
          <div className="card">
            <div className="info">
              <h3 className="title">MONOPOLY (Human-sized) – 30th April | OAT</h3>
              <p>
                Enter the high-stakes world of MONOPOLY reimagined with a tech twist! Strategize your moves, negotiate, and dominate the board with wit. Will you build your empire or go bankrupt trying?
              </p>
            </div>
          </div>
        </div>
      </div>

      <Button className="mt-10" asChild>
        <a href="/">← Back to Home</a>
      </Button>
    </main>
  );
}
