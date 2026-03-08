export default function CustomersIntro() {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[1216px]">

        {/* Small Label */}
        <p className="text-[15.63px] font-semibold leading-[24px] text-[#FF6243]">
          Customer stories
        </p>

        {/* Heading */}
        <h2 className="mt-3 text-[46.5px] font-semibold leading-[56px] tracking-[-1.2px] text-white">
          People just like you,
        </h2>

        {/* Gradient Text */}
        <h2 className="text-[46.5px] font-semibold leading-[56px] tracking-[-1.2px] bg-gradient-to-b from-[#FF6243] to-[#EB4734] bg-clip-text text-transparent">
          making over $1m
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-[520px] text-[17.3px] leading-[32px] text-[#B9BABF]">
          Learn about Whop customers and why thousands of internet entrepreneurs
          have chosen Whop as their business platform.
        </p>

      </div>
    </div>
  );
}