import HeroButtons from "@/components/molecules/HeroButtons";
import Image from "next/image";
import StatsBar from "../molecules/StatsBar";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center text-center mt-24 px-6">

            {/* Heading */}
            <h1 className="
            font-inter
            text-[62.88px]
            leading-[72px]
            tracking-[-1.6px]
            font-semibold
            text-center
            ">
                People like you make <br /> over $1M per year
            </h1>


            {/* Paragraph */}
            <p className="font-inter font-normal text-[17.3px] leading-[32px] tracking-normal text-center text-[rgba(185,186,191,1)]">
                Join the next generation of internet entrepreneurs building <br />their businesses on Whop's all-in-one platform.
            </p>

            {/* Buttons */}
            <HeroButtons />

            <Image
            src="/Main.png"
            alt="Hero image"
            width={1214}
            height={787}
            className="mt-10"
            />

            
            <br />

            <StatsBar />

        </section>

    );
}