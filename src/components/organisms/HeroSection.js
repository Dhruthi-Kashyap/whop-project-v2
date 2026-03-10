import HeroButtons from "@/components/molecules/HeroButtons";
import Image from "next/image";
import StatsBar from "../molecules/StatsBar";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center text-center mt-24 px-6">

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

            <p className="font-inter font-normal text-[17.3px] leading-[32px] tracking-normal text-center text-[rgba(185,186,191,1)]">
                Join the next generation of internet entrepreneurs building <br />their businesses on Whop's all-in-one platform.
            </p>

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
            
            <br />
            <br />
            <br />

            <h2 className="text-center">
                <span className="font-semibold text-5xl leading-[56px] tracking-[-1.2px]">
                    Sell literally{" "}
                </span>
                <span className="font-semibold text-[46.5px] leading-[56px] tracking-[-1.2px] bg-gradient-to-b from-[#FF6243] to-[#EB4734] bg-clip-text text-transparent">
                    anything
                </span>
            </h2>

            {/* <p className="mt-6 max-w-md mx-auto text-center text-[17.44px] leading-[32px] text-[#B9BABF]">
            Whop App Templates allows anyone to launch the business of their dreams.
            </p> */}

            <div className="mt-6 max-w-[488px] min-h-[64px] mx-auto">
                <p className="text-center text-[17.44px] leading-[32px] text-[#B9BABF]">
                    Whop App Templates allows anyone to launch the business      
                          of their dreams.
                </p>
            </div>


        </section>

    );
}