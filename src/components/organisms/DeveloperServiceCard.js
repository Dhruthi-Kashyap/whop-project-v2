export default function DeveloperServiceCard() {
  return (
    <div
      className="
        w-[706px]
        h-[520px]
        rounded-[16px]
        bg-[#1D1D20]
        shadow-[0px_4px_10px_#0000004D,inset_0px_1px_0px_#FFFFFF0F]
        overflow-hidden
        flex
        flex-col
      "
    >
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

        <button
          className="
            mt-6
            w-[120px]
            h-[38px]
            rounded-[6px]
            text-white
            text-sm
            bg-[#3A3A40]
            border border-[#1D1D20]
            shadow-[0px_1px_3px_#0000001A,inset_0px_2px_0px_#FFFFFF0D]
            hover:bg-[#4A4A50]
            transition
          "
        >
          Contact us
        </button>

      </div>
    </div>
  );
}