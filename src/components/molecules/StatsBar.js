export default function StatsSection() {
  return (
    <section className="w-full bg-black py-24 flex justify-center">
      
   
      <div className="flex gap-24 text-center">

        
        <div className="flex flex-col items-center">
          
        
          <p className="text-[#B9BABF] text-[12.59px] leading-[24px] font-semibold">
            Active sellers on Whop
          </p>

          
          <div className="w-[405.34px] h-[45px] flex items-center justify-center">
            <p className="text-white text-[32px] font-bold tracking-tight font-[var(--font-geometric)]">
              7,026
            </p>
          </div>

        </div>

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