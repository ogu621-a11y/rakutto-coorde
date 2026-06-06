export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-sky-500 font-bold mb-3">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            無料で試してみる
          </h2>

          <p className="mt-4 text-gray-600">
            事前登録いただいた方へ
            サービス開始時にご案内します。
          </p>

        </div>

        <form
          action="https://formspree.io/f/xnjypaea"
          method="POST"
          className="
          bg-white
          rounded-[32px]
          shadow-xl
          p-8
          space-y-6
          "
        >

          <div>
            <label className="block mb-2 font-bold">
              お名前
            </label>

            <input
              type="text"
              name="name"
              required
              className="
              w-full
              border
              rounded-xl
              p-4
              "
            />
          </div>

          <div>
            <label className="block mb-2 font-bold">
              メールアドレス
            </label>

            <input
              type="email"
              name="email"
              required
              className="
              w-full
              border
              rounded-xl
              p-4
              "
            />
          </div>

          <button
            type="submit"
            className="
            w-full
            bg-yellow-400
            hover:bg-yellow-500
            font-bold
            py-4
            rounded-full
            transition
            "
          >
            無料で登録する
          </button>

        </form>

      </div>
    </section>
  );
}