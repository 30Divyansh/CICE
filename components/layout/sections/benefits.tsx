import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Sparkle",
    title: "POWER 2.0",
    description:
      "A Home Automation Workshop where participants explored smart home technology and prizes were distributed. ",
  },
  {
    icon: "Sparkle",
    title: "SPARK",
    description:
      "Showcases innovative student projects, emphasizing academic achievements with substantial cash prizes for top projects.",
  },

  {
    icon: "Sparkle",
    title: "VIDYUT",
    description:
      "The Technical fest of the CICE Hub , featuring a project exhibition ECE students minor projects.",
  },

  {
    icon: "Sparkle",
    title: "POWER 2.1",
    description:
      "A PCB fabrication workshop dedicated to volunteer training and fabricating students' own PCBs, awarding a prize for the best design.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">About US</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Events💫</h2>
          <p className="text-xl text-muted-foreground mb-8">
            At CICE, we nurture innovation and excellence in electronics,
            empowering students with comprehensive training and hands-on
            experience.🧠
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
