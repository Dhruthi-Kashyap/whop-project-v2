export default function StartSellingCard() {
  return (
    <div className="w-full flex justify-center mt-24">
      <div
        className="w-[1216px] h-[388px] rounded-[16px]
        bg-[linear-gradient(0deg,rgba(255,98,67,0.75),rgba(255,98,67,0.75)),radial-gradient(100%_100%_at_50%_50%,rgba(255,0,0,0.75)_0%,rgba(255,120,0,0.58)_100%)]
        shadow-[0px_8px_44px_0px_#FF64454D,0px_4px_12px_0px_#0000001A]
        flex flex-col items-center justify-center text-center relative"
      >

        {/* inset shadow */}
        <div className="absolute inset-0 rounded-[16px] shadow-[inset_0px_1px_0px_0px_#FFFFFF33] pointer-events-none" />

        {/* Title */}
        <h2 className="text-[46.13px] font-semibold leading-[56px] tracking-[-1.2px] text-white">
          Start selling on Whop
        </h2>

        {/* Subtitle */}
        <p className="text-[17.3px] leading-[32px] text-white mt-3">
          All you need is an idea. We handle the rest.
        </p>

        {/* Button */}
        <button
          className="mt-8 w-[145px] h-[36px] rounded-[6px] bg-white
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          hover:bg-gray-200 hover:scale-105 hover:shadow-lg"
        >
          <span className="text-[12.59px] font-semibold text-black">
            Start selling for free
          </span>
        </button>

      </div>
    </div>
  );
}