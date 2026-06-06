export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black">
          ラクっとコーデ
        </h1>

        <nav className="hidden md:flex gap-6">
          <a href="#">特徴</a>
          <a href="#">使い方</a>
          <a href="#">料金</a>
          <a href="#">FAQ</a>
        </nav>

        <a
        href="#contact"
        className="
        bg-yellow-400
        px-5
        py-2
        rounded-full
        font-bold
        inline-block
        hover:bg-yellow-500
        transition
        "
        >
        無料で試してみる
        </a>
      </div>
    </header>
  );
}