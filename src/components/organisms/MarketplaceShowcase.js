export default function MarketplaceShowcase() {
  return (
    <section className="relative w-full bg-[#0B0D12] overflow-hidden flex justify-center">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative w-[1440px] flex items-center justify-between px-24 py-32">

        <div className="w-[500px]">

          <p className="text-[#6C63FF] text-sm mb-4">
            Marketplace
          </p>

          <h1 className="text-white text-[46px] font-semibold leading-[56px] tracking-[-1.2px]">
            We help you get <br />
            new customers
          </h1>

          <p className="text-[#B9BABF] text-[17px] leading-[32px] mt-6 max-w-[420px]">
            Selling on Whop means your company will be
            discoverable on the Whop.com marketplace!
          </p>

          <button className="mt-8 px-6 py-2 rounded-md bg-[#625BF6] text-white text-sm font-semibold hover:brightness-110 transition shadow-lg">
            Get Started
          </button>

          <div className="mt-20 w-[420px] h-[220px] rounded-2xl bg-gradient-to-br from-[#6D66F7] to-[#4B46D9] p-6 relative shadow-2xl">

            <div className="text-white/70 text-xs">
              Monthly active users
            </div>

            {/* Graph line */}
            <div className="absolute left-6 right-6 bottom-20 border-t border-dashed border-white/40" />

            <div className="absolute bottom-6 right-6 text-white text-xl font-semibold">
              2,433,535
            </div>
          </div>

        </div>

        <div className="relative">

          <img
            src="/dashboard-main.png"
            alt="Dashboard"
            className="w-[980px] rounded-lg shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}