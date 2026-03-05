export default function CaseStudyCard() {
  return (
    <div className="w-full flex justify-center mt-24">
      <div className="w-[1216px] h-[394px] flex justify-between items-center">

        {/* LEFT CONTENT */}
        <div className="w-[452px] h-[341px] flex flex-col">

          {/* Title */}
          <h2 className="text-[28px] font-semibold leading-[32px] tracking-[-0.42px] text-white">
            GFNF
          </h2>

          {/* Description */}
          <p className="mt-6 text-[17.3px] leading-[32px] text-[#D1D5DB]">
            GFNF is a premium reselling community that offers exclusive alerts,
            tools, and educational materials to help members make a profit
            reselling.
          </p>

          {/* Stats */}
          <div className="flex gap-16 mt-10">

            <div>
              <p className="text-[13.56px] font-semibold text-[#B9BABF]">
                Date launched on Whop
              </p>

              <p className="text-[17.02px] text-white mt-2">
                February 15, 2023
              </p>
            </div>

            <div>
              <p className="text-[13.78px] font-semibold text-[#B9BABF]">
                Paying members
              </p>

              <p className="text-[18px] text-white mt-2">
                2,000+
              </p>
            </div>

          </div>

          {/* Read More */}
          <a
            href="#"
            className="mt-10 text-[13px] font-semibold text-[#FBFBFC]"
          >
            Read more
          </a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[700px] h-[394px]">
          <img
            src="/gfnf.png"
            alt="GFNF"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>

      </div>
    </div>
  );
}