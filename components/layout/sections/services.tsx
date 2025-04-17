import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Zap, Puzzle, Star } from "lucide-react";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  icon: JSX.Element;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Workshops & Seminars",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    description:
      "Engage in interactive workshops exploring cutting-edge tech and creative problem solving.",
    pro: 0,
  },
  {
    title: "Free Project Components",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    description:
      "Get access to all the components you need—100% free for your CICE projects.",
    pro: 0,
  },
  {
    title: "Innovation Space Access",
    icon: <Puzzle className="w-6 h-6 text-emerald-500" />,
    description:
      "Work in the largest and most equipped student innovation space on campus.",
    pro: 0,
  },
  {
    title: "Mentorship & Guidance",
    icon: <Star className="w-6 h-6 text-pink-500" />,
    description:
      "Learn from experienced mentors, faculty, and alumni—your growth is our priority.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 px-4">
      <div className="text-center mb-14">
        <h2 className="text-sm font-medium text-primary tracking-wide uppercase mb-2">
          Our Offerings
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-sky-400 text-transparent bg-clip-text mb-3">
          Elegant Features for Future Innovators
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto text-base">
          Empowering young minds through innovation, creativity, and the tools to bring their ideas to life.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:w-[70%] mx-auto">
        {serviceList.map(({ title, description, icon, pro }) => (
          <Card
            key={title}
            className="relative bg-white/90 dark:bg-white/5 backdrop-blur-sm border border-muted/20 shadow-md hover:shadow-xl hover:scale-[1.015] transition-all duration-300 rounded-2xl overflow-hidden"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-muted">
                  {icon}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {title}
                </CardTitle>
              </div>
              <CardDescription className="text-muted-foreground text-sm">
                {description}
              </CardDescription>
            </CardHeader>

            {pro === ProService.YES && (
              <Badge
                variant="secondary"
                className="absolute top-2 right-2 bg-yellow-400 text-black shadow"
              >
                PRO
              </Badge>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
