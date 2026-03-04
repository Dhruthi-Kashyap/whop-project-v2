import Logo from "@/components/atoms/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[1280px] mx-auto px-8 py-12">

      <div className="flex justify-between items-start">

        {/* LEFT SIDE */}
        <div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-bold text-white">
              Whop
            </span>
          </div>

          {/* Description */}
          <p className="mt-4 max-w-[336px] text-[12.39px] leading-[24px] text-[#D1D5DB]">
            The #1 preferred way to build and distribute a modern-day internet business.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex items-center gap-8">
            <a href="https://twitter.com">
              <img src="/twitter.png" alt="Twitter" className="w-4 h-4" />
            </a>
            <a href="https://discord.com">
              <img src="/discord.png" alt="Discord" className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-24">

          {/* Whop */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-sm font-semibold text-[#92939D] hover:text-white transition">
              Whop
            </Link>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              Resources
            </a>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              Developers
            </a>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              Pricing
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm font-semibold text-[#92939D] hover:text-white transition">
              Links
            </a>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              Marketplace
            </a>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              Dashboard
            </a>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              Blog
            </a>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm font-semibold text-[#92939D] hover:text-white transition">
              Resources
            </a>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              Guides
            </a>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              Support center
            </a>
          </div>

          {/* Developers */}
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm font-semibold text-[#92939D] hover:text-white transition">
              Developers
            </a>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              Guides
            </a>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              API reference
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm font-semibold text-[#92939D] hover:text-white transition">
              Company
            </a>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              Careers
            </a>
            <a href="#" className="text-[12.8px] leading-[24px] font-medium text-[#D1D5DB]">
              Terms of service
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}