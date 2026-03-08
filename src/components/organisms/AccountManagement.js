export default function AccountManagement() {
  const cards = [
    {
      title: "Growth",
      img: "/growth.png",
      text: `At Whop, Account Managers focus on boosting your growth, contributing millions in revenue for sellers annually through strategic planning and growth hacks.`,
    },
    {
      title: "Dedicated support",
      img: "/support.png",
      text: `Account Managers are available 24/7 via call, email, or text to assist with any business or personal emergencies you might face.`,
    },
    {
      title: "Exposure",
      img: "/exposure.png",
      text: `Our Account Managers will leverage the power of Whop's vast network to enhance your exposure on social media platforms.`,
    },
    {
      title: "Services & reporting",
      img: "/report.png",
      text: `Account Managers will provide regular reports (weekly to yearly) to highlight insights and track your business progress.`,
    },
  ];

  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[1440px]">

        {/* Top label */}
        <p className="text-[#FF6243] font-semibold text-[15.75px] ml-[112px]">
          Account management
        </p>

        {/* Heading */}
        <h2 className="text-[46.5px] leading-[56px] tracking-[-1.2px] font-semibold mt-4 ml-[112px]">
          World class account
          <br />
          management
        </h2>

        {/* Description */}
        <p className="text-[17.58px] leading-[32px] text-gray-500 mt-6 ml-[112px] w-[466px]">
          Businesses on Whop that make over $50,000 per month qualify for
          account management services. Account Managers at Whop are 100% free
          for businesses.
        </p>

        {/* Cards */}
        <div className="flex justify-center mt-20">
          <div className="flex gap-12">

            {cards.map((card, index) => (
              <div key={index} className="w-[280px]">

                {/* Icon */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-[72px] h-[72px]"
                />

                {/* Title */}
                <h3 className="font-semibold text-[15.63px] mt-6">
                  {card.title}
                </h3>

                {/* Text */}
                <p className="text-[13.45px] leading-[24px] text-gray-600 mt-3">
                  {card.text}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}