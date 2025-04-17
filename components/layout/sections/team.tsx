import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Component } from "react";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl:
        "/images/ANSHIT.jpg",
      firstName: "Anshit ",
      lastName: "Gupta",
      positions: ["PRESIDENT "],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/anshit-gupta-ag101218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },

    {
      imageUrl:
        "/images/parul.jpg",
      firstName: "Parul",
      lastName: "Mundlia",
      positions: ["Vice President "],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/parul-mundalia-720b57277/",
        },
        {
          name: "Github",
          url: "https://github.com/Parulll3008",
        },
      ],
    },
    {
      imageUrl: "/images/Dhruv.jpg",
      firstName: "Dhruv Bal ",
      lastName: "Dixit",
      positions: ["Organising Secretary"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/dhruv-bal-dikshit-a57336244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      imageUrl:
        "/images/priyanshu.webp",
      firstName: "Priyanshu",
      lastName: "Aggarwal",
      positions: ["Tech ECE Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/priyanshu-aggarwal-900860250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      imageUrl: "/images/Rishika.jpeg",
      firstName: "Rishika",
      lastName: "Aggarwal",
      positions: ["Tech Head CSE"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/rishika-aggarwal-462b2a280/",
        },
        {
          name: "Github",
          url: "https://github.com/rishika-on-git",
        },
      ],
    },
    {
      imageUrl: "/images/mehulBansal.jpeg",
      firstName: "Mehul",
      lastName: "Bansal",
      positions: ["Vice Tech Head CSE"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/mehul-bansal-27173b254/",
        },
        {
          name: "Github",
          url: "https://github.com/mehul1409",
        },
      ],
    },

    {
      imageUrl:
        "/images/Kashish.jpg",
      firstName: "Kashish",
      lastName: "Porwal",
      positions: ["Content and Creative Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "http://linkedin.com/in/kashish-porwal-328a63289",
        },
      ],
    },
    {
      imageUrl:
        "/images/Madan.JPG",
      firstName: "Madan Gopal",
      lastName: "Jha",
      positions: ["Cinematography Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/madan-gopal-jha-380865255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Github",
          url: "https://github.com/Madan2468",
        },
      ],
    },
    {
      imageUrl: "/images/Mahak Salecha.jpeg",
      firstName: "Mahak",
      lastName: "Salecha",
      positions: ["Vice Tech Ece Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/mahak-salecha-9b5073271/",
        },
      ],
    },
    {
      imageUrl:
        "/images/Rashi.jpeg",
      firstName: "Rashi",
      lastName: "Mall",
      positions: ["Management Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://in.linkedin.com/in/rashi-mall-b1b878271",
        },
        {
          name: "Github",
          url: "https://github.com/rmall2003"
        },
      ],
    },
    {
      imageUrl:
        "/images/preyerna.jpeg",
      firstName: "Preyerna",
      lastName: "Srivastava",
      positions: ["VICE TECH ECE HEAD"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "www.linkedin.com/in/preyerna",
        },
        {
          name: "Github",
          url: "https://github.com/preyerna",
        },
      ],
    },    
    {
      imageUrl:
        "/images/aditya.jpg",
      firstName: "Aditya",
      lastName: "Sinha",
      positions: ["Digital Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/aditya-sinha-7aa932268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      imageUrl:
        "/images/aryan.jpg",
      firstName: "Aryan",
      lastName: "Agarwal",
      positions: ["PR & Marketing Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/aditya-sinha-7aa932268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };


  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>


        <h2 className="text-3xl md:text-4xl text-center font-bold">
         Amazing Team :)
        </h2>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${index === positions.length - 1 && "pb-6"
                    }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}


              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};




