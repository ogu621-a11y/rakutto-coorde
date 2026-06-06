export default function CTA() {
  return (
    <section
      className="
      py-28
      bg-gradient-to-r
      from-yellow-300
      to-yellow-400
      "
    >
      <div
        className="
        max-w-5xl
        mx-auto
        px-6
        text-center
        "
      >
        <p
          className="
          text-sky-700
          font-bold
          mb-4
          "
        >
          START TODAY
        </p>

        <h2
          className="
          text-5xl
          md:text-7xl
          font-black
          leading-tight
          "
        >
          今日から
          <br />
          ラクっとコーデ
        </h2>

        <p
          className="
          mt-8
          text-xl
          "
        >
          AIが毎日の服選びをサポート
        </p>

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-4
          mt-8
          "
        >
          <span className="bg-white px-4 py-2 rounded-full">
            無料
          </span>

          <span className="bg-white px-4 py-2 rounded-full">
            30秒で登録
          </span>

          <span className="bg-white px-4 py-2 rounded-full">
            スマホ対応
          </span>
        </div>

       <a
        href="#contact"
        className="
        inline-block
        mt-10
        bg-black
        text-white
        px-10
        py-5
        rounded-full
        font-bold
        text-lg
        hover:scale-105
        transition
        "
        >
        無料で始める
        </a>
      </div>
    </section>
  );
}