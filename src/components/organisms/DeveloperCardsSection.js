export default function DeveloperCardsSection() {
  return (
    <section className="w-full flex justify-center mt-24">
      <div className="w-[1208px] flex">

        <div className="w-[502px] h-[520px] rounded-l-[16px] bg-[#1D1D20] shadow-[0px_4px_10px_#0000004D,inset_0px_1px_0px_#FFFFFF0F] relative overflow-hidden">

          <div className="p-12">
            <p className="text-[#FF6243] text-[12.5px] font-semibold">
              Easy-to-use API
            </p>

            <h3 className="mt-4 text-white text-[28px] font-semibold">
              Build apps yourself
            </h3>

            <p className="mt-4 text-[#B9BABF] text-[14px] leading-6 max-w-[354px]">
              Integrate Whop’s payment, membership, and fulfillment
              features into your software with just a few lines of code.
            </p>

            <button className="mt-6 px-4 h-[38px] rounded-[6px] bg-[#3A3A40] text-white text-sm border border-[#1D1D20] shadow-[0px_1px_3px_#0000001A,inset_0px_2px_0px_#FFFFFF0D] hover:bg-[#4A4A50] transition">
              Read the docs
            </button>
          </div>

          <div className="absolute left-0 right-0 top-[280px] h-px bg-white/5" />

          <div className="absolute bottom-0 left-0 w-full h-[240px] overflow-hidden">
            <img
              src="/image2.png"
              alt="Code Preview"
              className="absolute right-0 bottom-0 h-[260px] object-cover"
            />

            <div className="absolute bottom-12 left-16 w-[104px] h-[104px] rounded-[8px] bg-[#2A2A2E] border border-[#3A3A40] flex items-center justify-center shadow-xl">
              <img
                src="/image1.png"
                alt="SDK"
                className="w-[86px] h-[86px] rounded-[2px]"
              />
            </div>
          </div>
        </div>


        <div className="w-[706px] h-[520px] rounded-r-[16px] bg-[#1D1D20] shadow-[0px_4px_10px_#0000004D,inset_0px_1px_0px_#FFFFFF0F] overflow-hidden flex flex-col">

          <img
            src="/developer-banner.png"
            alt="Developer banner"
            className="w-full h-[280px] object-cover"
          />

          <div className="px-12 pt-8 flex-1 flex flex-col">

            <div className="flex items-center gap-4">
              <img
                src="/dev-icon.png"
                alt="Icon"
                className="w-[24px] h-[24px]"
              />
              <span className="text-[#FF6243] text-[12.59px] font-semibold leading-6">
                Developers at your service
              </span>
            </div>

            <h3 className="mt-4 text-white text-[27.23px] font-semibold leading-8 tracking-[-0.42px] max-w-[387px]">
              Get your app idea built for free
            </h3>

            <p className="mt-4 text-[#B9BABF] text-[13.45px] leading-6 max-w-[431px]">
              Have an idea for an App Template on Whop? Reach out to us below,
              and we may build you the App Template for free!
            </p>

            <button className="mt-6 w-[120px] h-[38px] rounded-[6px] text-white text-sm bg-[#3A3A40] border border-[#1D1D20] shadow-[0px_1px_3px_#0000001A,inset_0px_2px_0px_#FFFFFF0D] hover:bg-[#4A4A50] transition">
              Contact us
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}