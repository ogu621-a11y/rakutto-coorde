const features = [
  {
    number: "01",
    title: "AIコーデ提案",
    description:
      "あなたの好みや過去のコーデ履歴を学習し、毎日に最適なスタイルを提案します。",
    icon: "✨",
  },
  {
    number: "02",
    title: "クローゼット管理",
    description:
      "持っている服を登録するだけで、着回し可能なコーデを自動生成します。",
    icon: "👔",
  },
  {
    number: "03",
    title: "天気連動",
    description:
      "気温や天候を考慮して、その日にぴったりな服装を提案します。",
    icon: "☀️",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="text-sky-500 font-bold mb-3">
            FEATURES
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            ラクっとコーデの特徴
          </h2>

        </div>

        <div className="space-y-12">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="
              bg-white
              rounded-[40px]
              shadow-xl
              p-8
              md:p-12
              "
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">

                <div>

                  <div
                    className="
                    text-yellow-400
                    text-7xl
                    font-black
                    mb-4
                    "
                  >
                    {feature.number}
                  </div>

                  <h3
                    className="
                    text-3xl
                    font-black
                    mb-4
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                    text-gray-600
                    leading-relaxed
                    "
                  >
                    {feature.description}
                  </p>

                </div>

                <div
                  className="
                  bg-slate-100
                  rounded-[32px]
                  aspect-video
                  flex
                  items-center
                  justify-center
                  text-7xl
                  "
                >
                  {feature.icon}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}