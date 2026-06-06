export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-black mb-4">
              ラクっとコーデ
            </h3>

            <p className="text-slate-300">
              AIがあなたの毎日のコーディネートを
              サポートします。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              サービス
            </h4>

            <ul className="space-y-2 text-slate-300">
              <li>特徴</li>
              <li>使い方</li>
              <li>料金</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              サポート
            </h4>

            <ul className="space-y-2 text-slate-300">
              <li>会社概要</li>
              <li>利用規約</li>
              <li>プライバシーポリシー</li>
              <li>お問い合わせ</li>
            </ul>
          </div>

        </div>

        <div
          className="
          border-t
          border-slate-700
          mt-12
          pt-6
          text-center
          text-slate-400
          "
        >
          © 2026 ラクっとコーデ
        </div>

      </div>
    </footer>
  );
}