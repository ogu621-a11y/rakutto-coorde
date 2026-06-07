import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-40" />

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-32
        grid
        lg:grid-cols-2
        gap-12
        items-center
      "
      >
        {/* 左 */}
        <div>
          <p className="text-sky-500 font-bold mb-4">
            コーデはAIにおまかせ！
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-black
            leading-[1.1]
            "
          >
            迷わず、
            <br />
            オシャレを
            <br />
            楽しもう。
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-600">
            AIがあなたに最適なコーディネートを提案。
            毎朝の服選びをもっと楽しく、もっと簡単に。
          </p>

          <a
            href="#contact"
            className="
            inline-block
            mt-10
            bg-yellow-400
            hover:bg-yellow-500
            px-8
            py-4
            rounded-full
            font-bold
            transition
            "
          >
            30秒で無料登録
          </a>
        </div>

       {/* 右 */}
        <div className="relative flex justify-center lg:justify-end">

          <div
            className="
            absolute
            bottom-10
            right-0
            w-[420px]
            h-[420px]
            bg-yellow-300
            rounded-full
            opacity-70
            -z-10
            "
          />

          <Image
            src="/images/hero-couple.png"
            alt="AIコーデを利用する男女"
            width={1000}
            height={1400}
            priority
            className="
            w-full
            max-w-[900px]
            h-auto
            object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}