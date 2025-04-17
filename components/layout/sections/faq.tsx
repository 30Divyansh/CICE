import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles, HelpCircle, Lightbulb } from "lucide-react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}
const FAQList: FAQProps[] = [
  {
    question: "🌟 What is CICE Hub?",
    answer:
      "CICE Hub (Creativity and Innovation Cell in Electronics) is a vibrant space where you dive into electronics, learn PCB design, and bring innovative ideas to life through real-world projects.",
    value: "item-1",
  },
  {
    question: "🎓 Who can join CICE Hub?",
    answer:
      "Anyone with curiosity and a spark for innovation! Whether you&apos;re a beginner or an experienced maker—you&apos;re welcome here.",
    value: "item-2",
  },
  {
    question: "🧠 What skills will I learn at CICE Hub?",
    answer:
      "You&apos;ll master hands-on electronics, learn PCB fabrication, explore Arduino & AVR microcontrollers, and even build your own tech creations.",
    value: "item-3",
  },
  {
    question: "📚 Does CICE Hub provide workshops?",
    answer:
      "Absolutely! We regularly host engaging workshops and training sessions on essential electronics skills and tools.",
    value: "item-4",
  },
  {
    question: "📢 How can I stay updated with activities?",
    answer:
      "Follow us on social media and check our website often—we keep it buzzing with events, news, and opportunities!",
    value: "item-5",
  },
  {
    question: "🎯 How often are events and competitions held?",
    answer:
      "We host events and competitions consistently throughout the academic year to keep the creative momentum going.",
    value: "item-6",
  },
  {
    question: "🔧 Can I get help with personal projects?",
    answer:
      "Definitely! Our mentors and fellow innovators are here to support your personal electronics journeys.",
    value: "item-7",
  },
  {
    question: "💡 What makes CICE Hub unique?",
    answer:
      "Our blend of community, creativity, and practical learning is unmatched. CICE Hub isn&apos;t just a club—it&apos;s a launchpad for ideas.",
    value: "item-8",
  },
  {
    question: "🌐 Are events open to all students?",
    answer:
      "Yes! All students can join. While some sessions may need prior knowledge, most are beginner-friendly and inclusive.",
    value: "item-9",
  },
  {
    question: "🚀 Any success stories from CICE Hub?",
    answer:
      "So many! From prototype inventions to national-level competitions—our members thrive and often secure top internships and jobs.",
    value: "item-10",
  },
];

export const FAQSection = () => {
  return (
    <section
      id="faq"
      className="container md:max-w-2xl py-24 sm:py-32 px-4"
    >
      <div className="text-center mb-10">
        <h2 className="text-sm font-semibold text-primary tracking-wider flex items-center justify-center gap-2 mb-1">
          <HelpCircle className="w-5 h-5" /> FAQs 🤔
        </h2>
        <h2 className="text-4xl font-extrabold text-foreground mb-2">
          Common Questions 💭
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Everything you might want to know about how CICE Hub can empower your creative journey.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="space-y-4"
      >
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem
            key={value}
            value={value}
            className="border border-muted/30 rounded-xl shadow-sm transition-all hover:shadow-md"
          >
            <AccordionTrigger className="text-left px-4 py-3 text-lg font-medium hover:text-primary transition-colors">
              {question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
