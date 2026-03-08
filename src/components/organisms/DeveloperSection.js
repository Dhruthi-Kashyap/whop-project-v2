export default function DeveloperSection() {
  return (
    <section className="w-full flex justify-center mt-40">
      <div className="w-[1440px] flex flex-col gap-24">

        
        <div className="flex justify-between items-start">

          {/* LEFT CONTENT */}
          <div className="w-[448px] flex flex-col">

            <span className="text-[#FF6243] text-[15.63px] font-semibold leading-[24px]">
              Designed for developers
            </span>

            <h2 className="text-white text-[46.31px] font-semibold leading-[56px] tracking-[-1.2px] mt-6">
              Ship more quickly <br />
              with powerful and
            </h2>

            <h2 className="text-[45.94px] font-semibold leading-[56px] tracking-[-1.2px] bg-gradient-to-b from-[#EC5940] to-[#FF280F] bg-clip-text text-transparent">
              easy-to-use APIs
            </h2>

            <p className="text-[#B9BABF] text-[17.44px] leading-[32px] mt-6">
              Whop's platform streamlines app development with integrated user
              authentication, seamless payment processing, and efficient
              customer management. Designed for an optimal developer
              experience, our tools simplify complex backend processes,
              enabling you to focus on bringing your idea to life on a single,
              adaptable platform.
            </p>

            <button
              className="w-[112px] h-[36px] rounded-[6px] mt-8
              bg-[#FF6243]
              text-[12.29px] font-semibold text-white
              shadow-[0px_3px_20px_#FF644566,0px_1px_4px_#00000080]
              flex items-center justify-center"
            >
              Read the docs
            </button>
          </div>

          
          <div className="w-[640px] h-[424px]">
            <img
              src="/developer.png"
              alt="developer tools"
              className="w-full h-full object-contain"
            />
          </div>

        </div>

        
        <div className="flex justify-between w-[1280px] mx-auto">

          {/* CARD 1 */}
          <div className="w-[384px] flex flex-col">

            <img
              src="/dev1.png"
              alt="feature"
              className="w-[72px] h-[72px]"
            />

            <div className="mt-6">
              <h3 className="text-white text-[13.56px] font-semibold leading-[24px]">
                Sell your own apps
              </h3>

              <p className="text-[#B9BABF] text-[13.45px] leading-[24px] mt-2">
                On Whop, you’ll be able to build your own applications or
                software that you can sell directly to your customers.
                Launch SaaS apps in minutes.
              </p>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="w-[384px] flex flex-col">

            <img
              src="/dev2.png"
              alt="feature"
              className="w-[72px] h-[72px]"
            />

            <div className="mt-6">
              <h3 className="text-white text-[13.56px] font-semibold leading-[24px]">
                Build apps for sellers
              </h3>

              <p className="text-[#B9BABF] text-[13.45px] leading-[24px] mt-2">
               Don’t have an idea for your own app? Build/sell apps that
                other sellers can take advantage of. Whether it be a dog-
                walking app or a dispute-fighting app, build apps for
                businesses!
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="w-[384px] flex flex-col">

            <img
              src="/dev3.png"
              alt="feature"
              className="w-[72px] h-[72px]"
            />

            <div className="mt-6">
              <h3 className="text-white text-[13.56px] font-semibold leading-[24px]">
                Get hired as a freelance dev
              </h3>

              <p className="text-[#B9BABF] text-[13.45px] leading-[24px] mt-2">
                Sellers on Whop are always looking for more development
                talent to help them scale. You can get hired as a contractor
                by sellers on Whop directly from the dashboard!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}