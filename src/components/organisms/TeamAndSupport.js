export default function TeamAndSupportSection() {
  return (
    <div className="w-full flex flex-col items-center gap-24 mt-32">

      {/* ABOUT TEAM CARD */}
      <div className="w-[1216px] h-[855px] rounded-[16px] bg-[#1D1D20] shadow-[0px_4px_10px_#0000004D] relative flex flex-col items-center text-center">

        {/* inset shadow */}
        <div className="absolute inset-0 rounded-[16px] shadow-[inset_0px_1px_0px_#FFFFFF0F]" />

        {/* Tag */}
        <p className="text-white text-[15.5px] font-semibold mt-[105px]">
          About the team
        </p>

        {/* Heading */}
        <div className="mt-6 leading-[56px]">
          <h2 className="text-[47px] font-semibold text-white inline">
            The platform
          </h2>
          <span className="text-[45px] font-semibold text-[#EF8776] ml-2">
            we wish
          </span>
          <h2 className="text-[46px] font-semibold text-white block">
            we had growing up
          </h2>
        </div>

        {/* Description */}
        <p className="text-[#B9BABF] text-[17.3px] leading-[32px] w-[413px] mt-6">
          From sneaker bots to the most powerful version of Whop yet, we have
          remained dedicated to making online entrepreneurship a reality for
          everyone.
        </p>

        {/* Small avatars */}
        <div className="flex gap-4 mt-20">
          <img
            src="/team1.png"
            alt="team"
            className="w-[40px] h-[40px] rounded-full"
          />

          <img
            src="/team2.png"
            alt="team"
            className="w-[40px] h-[40px] rounded-full bg-white/10"
          />
        </div>

        {/* Large team image */}
        <img
          src="/team-large.png"
          alt="team group"
          className="w-[1268px] h-[228px] mt-20 object-cover"
        />
      </div>

      {/* CUSTOMER SUPPORT SECTION */}
      <div className="w-[1440px] flex flex-col items-center text-center">

        {/* Tag */}
        <p className="text-[#FF6243] text-[15.5px] font-semibold">
          Customer support
        </p>

        {/* Heading */}
        <h2 className="text-[46px] font-semibold text-white leading-[56px] mt-6 w-[708px]">
          We work around the clock, so you can focus on your product
        </h2>

        {/* Description */}
        <p className="text-[#B9BABF] text-[17.3px] leading-[32px] w-[435px] mt-6">
          We know running a business can be difficult, so we’re around 24/7 to
          help with any support you need!
        </p>

        {/* Support image */}
        <img
          src="/support-image.png"
          alt="customer support"
          className="mt-20"
        />
      </div>

    </div>
  );
}