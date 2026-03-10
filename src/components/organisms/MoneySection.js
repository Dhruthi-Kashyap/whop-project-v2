export default function MoneySection() {
  return (
    <div className="w-full">

      <section
        className="w-full h-[696px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('/images/background-image.jpg')" }}
      >
        <div className="w-[1280px] h-[372px] mt-[120px] px-[80px]">

          <div className="bg-[#625BF6] text-white text-[15.75px] leading-[24px] font-semibold px-3 py-1 inline-block rounded">
            Make even more money
          </div>

          <h2 className="mt-[20px] text-[46.31px] leading-[56px] tracking-[-1.2px] font-semibold text-[#1D1D20] max-w-[348px]">
            The possibilities <br /> are endless
          </h2>

          <p className="mt-[24px] text-[17.02px] leading-[32px] text-[#5E5E6A] max-w-[486px]">
            Our active developer community releases new apps daily!
            Have a great idea for a fitness app, a news app, or your own
            niche marketplace? Browse our app store and bring your
            idea to life!
          </p>

          <button
            className="mt-[32px] h-[36px] px-4 rounded-[6px] text-white text-[12.19px] font-semibold"
            style={{
              background:
                "linear-gradient(0deg, #625BF6, #625BF6), linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
              boxShadow:
                "0px 3px 20px 0px #625BF666, 0px 1px 0px 0px #FFFFFF1F inset, 0px 1px 4px 0px #00000033, 0px 0px 0px 1px #665FF6",
            }}
          >
            Get started
          </button>

        </div>
      </section>

      <section className="w-full h-[868px]">
        <img
          src="/section-image-1.png"
          alt="Section Image 1"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="w-full h-[914px]">
        <img
          src="/section-image-2.png"
          alt="Section Image 2"
          className="w-full h-full object-cover"
        />
      </section>

    </div>
  );
}