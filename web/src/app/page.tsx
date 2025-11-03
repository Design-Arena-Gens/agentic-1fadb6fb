import Link from "next/link";
import { NavBar } from "@/components/nav-bar";

const highlightedBooks = [
  {
    title: "Псалтирь",
    description: "Поэзия света и покоя, где каждая строка — дыхание молитвы.",
    detail: "150 псалмов утешения и благодарности",
  },
  {
    title: "Евангелия",
    description:
      "Свидетельства о Христе — светильник, озаряющий путь в сердце.",
    detail: "Матфей · Марк · Лука · Иоанн",
  },
  {
    title: "Притчи",
    description: "Мудрость повседневности, мягкий голос наставления.",
    detail: "Собрание древней мудрости Соломона",
  },
];

const readingMoments = [
  {
    title: "Утренняя заря",
    text: "Начните день с одного стиха и минутой тишины. Позвольте утреннему свету зазвучать внутри.",
  },
  {
    title: "Полдень покоя",
    text: "Вернитесь к словам Писания днём: короткое чтение обновит дыхание и взгляд.",
  },
  {
    title: "Вечер свечи",
    text: "Завершите день благодарностью. Позвольте огоньку свечи и строкам Писания растворить тревоги.",
  },
];

const verseOfTheDay = {
  reference: "Псалом 118:105",
  text: "«Слово Твоё — светильник ноге моей и свет стезе моей.»",
  reflection:
    "Пусть эта страница будет тем светильником, который мягко освещает каждое ваше движение и выбор.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#fff6e3,rgba(243,215,161,0.35)_40%,rgba(198,162,120,0.15)_100%)]">
      <NavBar />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 z-0 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(233,197,140,0.45)_65%,rgba(210,175,125,0)_100%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-180px] left-[12%] z-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,235,200,0.6),rgba(224,190,135,0)_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[8%] right-[8%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(222,189,146,0.38),rgba(211,178,142,0)_70%)] blur-3xl"
      />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-32 px-4 pb-32 pt-40 lg:px-8">
        <section
          id="home"
          className="rounded-[40px] bg-white/60 p-10 shadow-[0_28px_48px_-32px_rgba(64,48,36,0.45)] backdrop-blur-[24px] sm:p-14"
        >
          <div className="golden-divider mb-10" />
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end">
            <div className="flex-1 space-y-6">
              <p className="inline-flex items-center gap-3 rounded-full bg-white/60 px-4 py-2 text-xs tracking-[0.35em] text-[rgba(104,82,60,0.75)] shadow-[0_10px_24px_-18px_rgba(63,47,37,0.4)]">
                <span className="block h-2 w-2 rounded-full bg-[rgba(243,215,161,0.95)] shadow-[0_0_12px_rgba(243,215,161,0.7)]" />
                свет и покой
              </p>
              <h1 className="max-w-2xl font-serif text-5xl leading-[1.15] text-[rgba(53,39,30,0.95)] text-balance md:text-6xl">
                Страница тихого чтения, где каждое слово дышит светом.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[rgba(94,72,56,0.88)]">
                Создайте собственный ритм общения с Писанием: мы собрали
                вдохновляющие стихи, бережно настроенные цвета и мягкий свет,
                который сопровождает чтение, а не отвлекает.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <Link
                  href="#books"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,rgba(243,215,161,0.95),rgba(216,181,106,0.9))] px-6 py-3 text-[rgba(62,45,33,0.95)] shadow-[0_16px_34px_-22px_rgba(60,47,35,0.6)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Читать сейчас
                </Link>
                <Link
                  href="#verse"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(194,158,115,0.4)] bg-white/50 px-6 py-3 text-[rgba(92,72,57,0.88)] transition-colors duration-300 hover:border-[rgba(194,158,115,0.7)] hover:text-[rgba(61,45,33,0.95)]"
                >
                  Стих дня
                </Link>
              </div>
            </div>
            <div className="w-full max-w-sm rounded-[32px] border border-white/60 bg-gradient-to-br from-white/80 via-white/30 to-amber-100/40 p-8 shadow-[0_20px_40px_-30px_rgba(63,47,37,0.9)] backdrop-blur-3xl">
              <div className="mb-6 font-serif text-sm uppercase tracking-[0.4em] text-[rgba(110,86,65,0.72)]">
                тройной ритм чтения
              </div>
              <div className="space-y-6 text-[rgba(72,55,44,0.92)]">
                {readingMoments.map((moment) => (
                  <div key={moment.title} className="space-y-2">
                    <p className="font-serif text-lg text-[rgba(63,47,36,0.95)]">
                      {moment.title}
                    </p>
                    <p className="text-sm leading-relaxed text-[rgba(94,72,56,0.85)]">
                      {moment.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="books" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.45em] text-[rgba(114,88,66,0.7)]">
                книги света
              </p>
              <h2 className="font-serif text-4xl text-[rgba(55,40,31,0.95)]">
                Выбор для медленного чтения
              </h2>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(199,166,120,0.4)] bg-white/55 px-5 py-2.5 text-sm font-medium text-[rgba(94,72,56,0.85)] transition-colors duration-300 hover:border-[rgba(199,166,120,0.75)] hover:text-[rgba(61,45,33,0.95)]"
            >
              Смотреть все книги →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlightedBooks.map((book) => (
              <div
                key={book.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/50 bg-white/65 p-6 shadow-[0_20px_42px_-34px_rgba(63,47,37,0.6)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_52px_-32px_rgba(63,47,37,0.68)]"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(243,215,161,0.45),rgba(216,181,106,0))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="space-y-4">
                  <p className="font-serif text-2xl text-[rgba(58,43,33,0.95)]">
                    {book.title}
                  </p>
                  <p className="text-sm leading-relaxed text-[rgba(94,72,56,0.85)]">
                    {book.description}
                  </p>
                  <div className="golden-divider my-4 opacity-70" />
                  <p className="text-xs uppercase tracking-[0.4em] text-[rgba(126,96,70,0.8)]">
                    {book.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="verse"
          className="relative overflow-hidden rounded-[36px] border border-white/50 bg-gradient-to-br from-white/80 via-white/60 to-[rgba(233,197,140,0.28)] p-10 shadow-[0_24px_48px_-32px_rgba(59,46,34,0.55)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),rgba(233,197,140,0.25)_60%,rgba(201,170,122,0.1)_100%)] opacity-80" />
          <div className="relative space-y-8">
            <p className="inline-flex items-center gap-3 rounded-full bg-white/40 px-4 py-2 text-xs uppercase tracking-[0.45em] text-[rgba(110,86,65,0.7)] shadow-[0_12px_30px_-20px_rgba(60,47,35,0.5)]">
              {verseOfTheDay.reference}
            </p>
            <p className="font-serif text-3xl leading-relaxed text-[rgba(53,39,30,0.95)] text-balance md:text-4xl">
              <span className="text-glow">{verseOfTheDay.text}</span>
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-[rgba(94,72,56,0.85)]">
              {verseOfTheDay.reflection}
            </p>
          </div>
        </section>

        <section
          id="about"
          className="rounded-[36px] border border-white/40 bg-white/55 p-10 shadow-[0_22px_48px_-34px_rgba(63,47,37,0.55)] backdrop-blur-2xl"
        >
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
            <div className="space-y-6">
              <p className="font-serif text-sm uppercase tracking-[0.45em] text-[rgba(110,86,65,0.7)]">
                о проекте
              </p>
              <h3 className="font-serif text-3xl text-[rgba(57,41,31,0.95)]">
                Светлая обитель для вашего чтения
              </h3>
              <p className="text-base leading-relaxed text-[rgba(94,72,56,0.85)]">
                Мы стремимся создать атмосферу, где каждому стиху есть место и
                тишина, чтобы раскрыть его живое сияние. Здесь нет спешки — есть
                мягкий свет, который охватывает взгляд и сердце.
              </p>
              <p className="text-base leading-relaxed text-[rgba(94,72,56,0.85)]">
                Пусть этот уголок станет вашим спутником на пути вдумчивого
                чтения: от первых шагов в Писании до глубоких созерцательных
                часов.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-[28px] border border-white/50 bg-white/70 p-6 text-[rgba(92,72,57,0.88)] shadow-[0_18px_40px_-28px_rgba(63,47,37,0.6)]">
                <p className="font-serif text-lg text-[rgba(63,47,36,0.95)]">
                  Обновления
                </p>
                <p className="mt-3 text-sm leading-relaxed">
                  Мы добавляем новые планы чтения, ночные режимы и коллекции
                  стихов, адаптированные под настроение дня.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/45 bg-[radial-gradient(circle,rgba(255,255,255,0.8),rgba(233,197,140,0.35))] p-6 text-[rgba(92,72,57,0.88)] shadow-[0_18px_40px_-28px_rgba(63,47,37,0.6)]">
                <p className="font-serif text-lg text-[rgba(63,47,36,0.95)]">
                  Поддержите свет
                </p>
                <p className="mt-3 text-sm leading-relaxed">
                  Делитесь страницей, приглашайте друзей, создавайте свои
                  подборки. Каждое доброе слово усиливает сияние.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[rgba(63,47,36,0.95)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Подписаться на обновления →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/40 bg-white/35 py-10 text-center text-sm text-[rgba(92,72,57,0.75)] backdrop-blur-xl">
        <p>© {new Date().getFullYear()} «Свет и покой». Тихое чтение продолжается.</p>
      </footer>
    </div>
  );
}
