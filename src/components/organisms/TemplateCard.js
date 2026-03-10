export default function TemplateCard() {
  const smallCards = [
    { img: "/app1.png", title: "Web apps", desc: "Sell access to your web appvia OAuth." },
    { img: "/app2.png", title: "Discord", desc: "Sell access to an exclusive Discord community." },
    { img: "/app3.png", title: "Telegram", desc: "Sell access to an exclusive Telegram community." },
    { img: "/app4.png", title: "TradingView", desc: "Sell access to your TradingView Indicators." },
    { img: "/app5.png", title: "Course", desc: "Sell access to an online course or program." },
    { img: "/app6.png", title: "Files", desc: "Sell access to exclusive files." },
    { img: "/app7.png", title: "Software app", desc: "Sell access to software via license key.." },
  ];

  return (
    <div className="max-w-[1216px] bg-[#1D1D20] rounded-2xl shadow-[0px_4px_10px_#0000004D,inset_0px_1px_0px_#FFFFFF0F] mx-auto p-12 flex justify-between">

      <div className="flex flex-col justify-center gap-4 max-w-[400px]">
        <span className="text-[12.8px] font-semibold text-[#FF6243]">
          $ Make money
        </span>

        <h2 className="text-[27.13px] leading-[32px] font-semibold text-white">
          Sell Whop App Templates
        </h2>

        <p className="text-[13.45px] leading-[24px] text-[#B9BABF]">
          Whop App Templates are pre-built products you can sell access to in minutes.
        </p>

        <button className="w-[105px] h-[38px] rounded-md border border-[#3A3A40] bg-[#3A3A40] text-white text-sm hover:bg-[#2a2a2e] transition">
          View all apps
        </button>
      </div>

<div className="grid grid-cols-6 gap-6">

  <div className="col-start-2 col-span-2">
    <MiniCard img="/app1.png" title="Web app" desc="Sell access to your web app via OAuth." />
  </div>

  <div className="col-start-4 col-span-2">
    <MiniCard img="/app2.png" title="Discord" desc="Sell access to an exclusive Discord community." />
  </div>

  <div className="col-start-1 col-span-2">
    <MiniCard img="/app3.png" title="Telegram" desc="Sell access to an exclusive Telegram community." />
  </div>

  <div className="col-start-3 col-span-2">
    <MiniCard img="/app4.png" title="TradingView" desc="Sell access to your TradingView Indicators." />
  </div>

  <div className="col-start-5 col-span-2">
    <MiniCard img="/app5.png" title="Course" desc="Sell access to an online course or program." />
  </div>

  <div className="col-start-2 col-span-2">
    <MiniCard img="/app6.png" title="Files" desc="Sell access to exclusive files." />
  </div>

  <div className="col-start-4 col-span-2">
    <MiniCard img="/app7.png" title="Software app" desc="Sell access to software via license key." />
  </div>

</div>
    </div>
  );
}


function MiniCard({ img, title, desc }) {
  return (
    <div
      className="
        w-[208px]
        h-[100px]
        rounded-[8px]
        border border-[#FFFFFF0D]
        backdrop-blur-[32px]
        bg-[linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)),linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_100%)]
        p-4
        flex
        flex-col
        justify-center
      "
    >
      <div className="flex items-center gap-3">
        <img src={img} alt={title} className="w-[16px] h-[16px]" />
        <span className="text-[15.5px] font-semibold text-[#FBFBFC]">
          {title}
        </span>
      </div>

      <p className="text-[12.49px] leading-[20px] text-[#92939D] mt-2">
        {desc}
      </p>
    </div>
  );
}