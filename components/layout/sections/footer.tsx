import { Separator } from "@/components/ui/separator";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-12 bg-gradient-to-br from-background via-muted to-background border border-secondary rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-x-16 gap-y-12">
          {/* Logo + Description */}
          <div className="col-span-full xl:col-span-2 space-y-5">
            <Link href="#" className="flex items-center gap-4 font-extrabold text-5xl tracking-wide">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md border border-pink-500">
                <img src="/logo.png" alt="CICE Logo" className="object-cover w-full h-full" />
              </div>
              <span className="text-transparent bg-clip-text text-6xl font-extrabold animate-gradient-glow">
  CICE
</span>

            </Link>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed font-medium">
              🚀 Where creators connect and passion becomes purpose — welcome to your next big leap in innovation!
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-foreground">Contact Us</h3>
            <Link
              href="mailto:cice.jiitn@gmail.com"
              className="flex items-center gap-4 text-xl text-muted-foreground hover:text-pink-500 transition-all duration-200"
            >
              <FaEnvelope className="text-2xl text-pink-400 hover:animate-bounce" />
              Email Us
            </Link>
            <Link
              href="https://www.instagram.com/cice_jiit/"
              className="flex items-center gap-4 text-xl text-muted-foreground hover:text-purple-400 transition-all duration-200"
            >
              <FaInstagram className="text-2xl text-purple-400 hover:animate-pulse" />
              Instagram
            </Link>
          </div>

          {/* Socials */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-foreground">Socials</h3>
            <Link
              href="https://www.facebook.com/cicejiit"
              className="flex items-center gap-4 text-xl text-muted-foreground hover:text-blue-500 transition-all duration-200"
            >
              <FaFacebookF className="text-2xl text-blue-400 hover:animate-ping" />
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/cice_jiit/"
              className="flex items-center gap-4 text-xl text-muted-foreground hover:text-purple-400 transition-all duration-200"
            >
              <FaInstagram className="text-2xl text-purple-400 hover:animate-pulse" />
              Instagram
            </Link>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="text-center text-muted-foreground text-lg font-semibold tracking-wide">
  ✨ &copy; {new Date().getFullYear()} CICE JIIT — Where Ideas Take Flight ✨
</div>

      </div>
    </footer>
  );
};
