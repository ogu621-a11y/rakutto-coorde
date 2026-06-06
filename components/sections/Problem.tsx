const problems = [
  {
    title: "何を着ればいいかわからない",
    icon: "🤔",
  },
  {
    title: "毎日同じ服になってしまう",
    icon: "👕",
  },
  {
    title: "服選びに時間がかかる",
    icon: "⏰",
  },
  {
    title: "買い物が苦手",
    icon: "🛍️",
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-sky-500 font-bold mb-3">
            PROBLEM
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            こんなお悩み
            <br />
            ありませんか？
          </h2>

        </div>

        <div
          className="
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-4
          "
        >
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              hover:-translate-y-2
              transition
              duration-300
              "
            >
              <div className="text-5xl mb-6">
                {problem.icon}
              </div>

              <h3 className="font-bold text-lg">
                {problem.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}