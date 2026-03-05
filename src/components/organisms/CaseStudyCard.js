export default function CaseStudyCard({
  title,
  description,
  date,
  members,
  image,
  imageLeft = false,
}) {
  return (
    <div className="w-full flex justify-center mt-24">
      <div
        className={`w-[1216px] h-[394px] flex items-center justify-between ${
          imageLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* IMAGE */}
        <div className="w-[700px] h-[394px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>

        {/* CONTENT */}
        <div className="w-[452px] h-[373px] flex flex-col">

          {/* Title */}
          <h2 className="text-[27.34px] font-semibold leading-[32px] tracking-[-0.42px] text-white">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-6 text-[17.44px] leading-[32px] text-[#D1D5DB]">
            {description}
          </p>

          {/* Stats */}
          <div className="flex gap-16 mt-10">
            <div>
              <p className="text-[13.56px] font-semibold text-[#B9BABF]">
                Date launched on Whop
              </p>

              <p className="text-[17.02px] text-white mt-2">
                {date}
              </p>
            </div>

            <div>
              <p className="text-[13.78px] font-semibold text-[#B9BABF]">
                Paying members
              </p>

              <p className="text-[18px] text-white mt-2">
                {members}
              </p>
            </div>
          </div>

          {/* Read more */}
          <a
            href="#"
            className="mt-10 text-[13px] font-semibold leading-[24px] text-[#FBFBFC]"
          >
            Read more
          </a>

        </div>
      </div>
    </div>
  );
}