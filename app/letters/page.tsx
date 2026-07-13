// 봉투 앞면 모양의 카드로 편지를 보여주는 Letters(편지 아카이브) 페이지
import PageHero from "@/components/PageHero";

const letters = [
  {
    title: "너에게도, 여전히 은방울꽃",
    excerpt: "5월의 꽃말처럼, 반드시 행복해질 거라는 말을 대신 새겼습니다.",
    date: "2026.05.02",
  },
  {
    title: "우리 잘 흘러가보자",
    excerpt: "서두르지 않기로 해요. 물처럼, 우리답게, 같은 방향으로.",
    date: "2026.04.17",
  },
  {
    title: "슬픔을 꺼내보이지 않는 너에게",
    excerpt: "말하지 않아도 알고 있어요. 그 마음, 여기 함께 두고 갈게요.",
    date: "2026.03.28",
  },
  {
    title: "오래도록 무사한 저녁이 되자",
    excerpt: "별일 없는 하루가 실은 가장 큰 소원이라는 걸 알게 됐습니다.",
    date: "2026.02.14",
  },
  {
    title: "시작이 두려운 당신에게",
    excerpt: "첫 문장은 늘 어렵지만, 쓰고 나면 편지가 됩니다.",
    date: "2026.01.05",
  },
  {
    title: "그날의 온도를 기억해",
    excerpt: "손을 처음 잡던 날의 온도를, 반지의 안쪽에 남겼습니다.",
    date: "2025.12.24",
  },
];

export default function LettersPage() {
  return (
    <>
      <PageHero
        eyebrow="Letters Archive"
        title="전하지 못한 문장들"
        description="반지에 새긴 한 줄의 편지를 함께 나누는 공간입니다. 누군가의 마음이 또 다른 마음에 닿기를."
      />

      {/* 봉투 앞면 그리드 */}
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {letters.map((letter) => (
            <article
              key={letter.title}
              className="group relative overflow-hidden border-[0.5px] border-brown/20 bg-cream px-7 pt-10 pb-7 transition-transform duration-500 hover:-translate-y-1.5"
            >
              {/* 항공우편 줄무늬 상단 테두리 */}
              <div className="postal-edge absolute inset-x-0 top-0 h-1.5 opacity-60" />

              {/* 우표: 점선 테두리 안의 링 문양 */}
              <div className="absolute right-6 top-7 flex h-16 w-[3.25rem] flex-col items-center justify-center gap-1.5 border border-dashed border-brown/30 bg-warm-beige">
                <span className="h-5 w-5 rounded-full border-2 border-gold/70" />
                <span className="text-[7px] uppercase tracking-[0.2em] text-brown-soft">
                  LetteRing
                </span>
              </div>

              {/* 소인: 우표에 살짝 겹친 원형 스탬프 */}
              <div className="absolute right-[3.4rem] top-6 flex h-11 w-11 rotate-[-12deg] items-center justify-center rounded-full border border-brown/20">
                <span className="text-[6px] uppercase tracking-[0.15em] text-brown-soft/70">
                  Seongsu
                </span>
              </div>

              {/* 주소면: 받는 사람 */}
              <div className="pr-16">
                <p className="text-[10px] uppercase tracking-widest text-gold">
                  Letter from LetteRing
                </p>
                <h3 className="mt-4 font-serif text-xl leading-snug tracking-tight text-brown">
                  <span className="italic text-burgundy">Dear.</span>{" "}
                  {letter.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown-soft">
                  {letter.excerpt}
                </p>
              </div>

              {/* 하단: 날짜 · 보낸 이 */}
              <div className="mt-8 flex items-center justify-between border-t-[0.5px] border-brown/15 pt-4">
                <span className="font-mono text-xs text-brown-soft">{letter.date}</span>
                <span className="font-serif text-xs italic text-brown-soft transition-colors duration-300 group-hover:text-burgundy">
                  From. LetteRing
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-brown-soft">
          당신의 편지도 이곳에 도착할 수 있습니다 · 편지 쓰기는 준비 중이에요
        </p>
      </section>
    </>
  );
}
