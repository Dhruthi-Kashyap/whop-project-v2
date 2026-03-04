export default function TemplateCard() {
  return (
    <div className="max-w-[1216px] min-h-[400px] bg-[#1D1D20] rounded-2xl shadow-[0px_4px_10px_#0000004D,inset_0px_1px_0px_#FFFFFF0F] mx-auto p-12 flex flex-col justify-center gap-4">

      {/* Tag */}
      <span className="inline-block text-[12.8px] leading-[24px] font-semibold text-[#FF6243]  px-3 py-1 rounded-md w-fit">
        $ Make money
      </span>

      {/* Title */}
      <h2 className="text-[27.13px] leading-[32px] tracking-[-0.42px] font-semibold text-white">
        Sell Whop App Templates
      </h2>

      {/* Description */}
      <p className="text-[13.45px] leading-[24px] text-[#B9BABF] max-w-[334px]">
        Whop App Templates are pre-built products you can sell access to in minutes.
      </p>

      {/* Button */}
      <button className="w-[105px] h-[38px] rounded-md border border-[#3A3A40] bg-[#3A3A40] text-white text-sm flex items-center justify-center transition hover:bg-[#2a2a2e]">
        View all apps
      </button>

    </div>
  );
}