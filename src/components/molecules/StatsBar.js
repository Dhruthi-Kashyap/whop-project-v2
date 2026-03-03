export default function StatsSection() {
  return (
    <section className="w-full bg-black py-24 flex justify-center">
      
      {/* Centered Container */}
      <div className="flex gap-24 text-center">

        {/* 1️⃣ Active Sellers */}
        <div className="flex flex-col items-center">
          
          {/* Label */}
          <p className="text-[#B9BABF] text-[12.59px] leading-[24px] font-semibold">
            Active sellers on Whop
          </p>

          {/* Number Container */}
          <div className="w-[405.34px] h-[45px] flex items-center justify-center">
            <p className="text-white text-[32px] font-bold tracking-tight font-[var(--font-geometric)]">
              7,026
            </p>
          </div>

        </div>

        {/* 2️⃣ Total Processed */}
        <div className="flex flex-col items-center">
          
          <p className="text-[#B9BABF] text-[12.59px] leading-[24px] font-semibold">
            Total Processed on Whop
          </p>

          <div className="w-[405.34px] h-[45px] flex items-center justify-center">
            <p className="text-white text-[32px] font-bold tracking-tight font-[var(--font-geometric)]">
              $191,281,173
            </p>
          </div>

        </div>

        {/* 3️⃣ Memberships Sold */}
        <div className="flex flex-col items-center">
          
          <p className="text-[#B9BABF] text-[12.59px] leading-[24px] font-semibold">
            Memberships Sold on Whop
          </p>

          <div className="w-[405.34px] h-[45px] flex items-center justify-center">
            <p className="text-white text-[32px] font-bold tracking-tight font-[var(--font-geometric)]">
              3,604,715
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}