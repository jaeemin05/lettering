// 브랜드 감성을 전하는 메인 랜딩 페이지 — 히어로·갤러리·약속·편지 인용
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, AtSign, Feather, Gem, Heart } from "lucide-react";
import RingSilhouette from "@/components/RingSilhouette";

// 스태거 애니메이션 딜레이 헬퍼
const delay = (s: string) => ({ "--delay": s }) as CSSProperties;

const gallery = [
  { photo: "photo-warm-a", num: "01", title: "Morning Letter", ko: "아침, 첫 문장을 새기다", ring: "h-24 w-24", double: false },
  { photo: "photo-warm-b", num: "02", title: "Amber Hour", ko: "노을빛 아래 두 반지", ring: "h-20 w-20", double: true },
  { photo: "photo-warm-c", num: "03", title: "Sealed Heart", ko: "봉인된 마음", ring: "h-28 w-28", double: false },
  { photo: "photo-warm-d", num: "04", title: "Quiet Vow", ko: "조용한 약속", ring: "h-20 w-20", double: false },
  { photo: "photo-warm-b", num: "05", title: "Hand in Hand", ko: "포개어진 손", ring: "h-24 w-24", double: true },
  { photo: "photo-warm-a", num: "06", title: "P.S.", ko: "추신, 사랑해요", ring: "h-16 w-16", double: false },
];

export default function Home() {
  return (
    <>
      {/* 히어로: 좌측 카피 · 우측 대형 사진 플레이스홀더 */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 pt-16 pb-24 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pt-24 lg:pb-32">
        <div>
          <p className="fade-up text-xs uppercase tracking-[0.45em] text-gold">
            Engraving your mind on a ring
          </p>
          <h1
            className="fade-up mt-7 font-serif text-5xl leading-[1.12] text-burgundy sm:text-6xl"
            style={delay("0.1s")}
          >
            마음을
            <br />
            반지에 새깁니다
          </h1>
          <p
            className="fade-up mt-8 max-w-md text-base leading-relaxed text-brown-soft sm:text-lg"
            style={delay("0.2s")}
          >
            말로 다 전하지 못한 이야기를 한 줄의 각인으로.
            <br />
            LetteRing은 편지처럼 따뜻한 순간을 손끝에 남깁니다.
          </p>
          <div
            className="fade-up mt-11 flex flex-col gap-4 sm:flex-row"
            style={delay("0.3s")}
          >
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-2 bg-burgundy px-9 py-4 text-sm tracking-[0.15em] text-warm-beige transition-colors hover:bg-burgundy-deep"
            >
              제품 둘러보기
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-brown/25 px-9 py-4 text-sm tracking-[0.15em] text-brown transition-colors hover:border-burgundy hover:text-burgundy"
            >
              브랜드 이야기
            </Link>
          </div>
        </div>

        {/* 대형 사진 플레이스홀더: 편지 위에 놓인 반지 */}
        <div className="fade-up relative mx-auto w-full max-w-md" style={delay("0.25s")}>
          <div className="grain photo-warm-a flex aspect-[4/5] items-center justify-center rounded-sm shadow-[0_40px_80px_-40px_rgba(74,58,53,0.5)]">
            {/* 반지 아래 깔린 편지지 */}
            <div className="absolute inset-x-12 bottom-16 h-44 rotate-[5deg] rounded-sm bg-cream/45 shadow-[0_10px_24px_-12px_rgba(74,58,53,0.4)]">
              <div className="mx-5 mt-6 space-y-3">
                {[16, 14, 15, 9].map((w, i) => (
                  <div
                    key={i}
                    className="h-px bg-brown/25"
                    style={{ width: `${w * 5}%` }}
                  />
                ))}
              </div>
            </div>
            <RingSilhouette className="h-32 w-32 -translate-y-6" />
          </div>

          {/* 모서리에 겹쳐진 손편지 카드 */}
          <div className="absolute -bottom-9 -left-4 w-56 -rotate-[4deg] rounded-sm bg-cream px-6 py-5 shadow-[0_18px_40px_-18px_rgba(74,58,53,0.45)] sm:-left-8">
            <p className="font-serif text-sm leading-relaxed text-brown">
              &ldquo;늘 고마워요.
              <br />이 마음, 여기 새겨둘게요.&rdquo;
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brown-soft">
                from. J
              </span>
              <span className="h-4 w-4 rounded-full bg-gradient-to-br from-[#953450] to-[#4a1220] shadow-inner" />
            </div>
          </div>
        </div>
      </section>

      {/* 갤러리: 따뜻한 빛 아래의 반지들 — 가로 스크롤 피드 */}
      <section className="border-t border-brown/10 bg-cream py-20 lg:py-24">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-6 sm:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Gallery</p>
            <h2 className="mt-4 font-serif text-3xl text-burgundy sm:text-4xl">
              따뜻한 빛 아래에서
            </h2>
          </div>
          <a
            href="https://instagram.com"
            className="inline-flex items-center gap-1.5 text-sm text-brown-soft transition-colors hover:text-burgundy"
          >
            <AtSign size={15} strokeWidth={1.5} />
            lettering.official
          </a>
        </div>

        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 sm:px-8 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          {gallery.map((item) => (
            <figure
              key={item.num}
              className={`grain ${item.photo} relative aspect-square w-60 shrink-0 snap-center rounded-sm shadow-[0_24px_48px_-24px_rgba(74,58,53,0.5)] transition-transform duration-500 hover:-translate-y-1.5 sm:w-72`}
            >
              <div className="flex h-full items-center justify-center">
                {item.double ? (
                  <div className="flex items-center">
                    <RingSilhouette className={item.ring} />
                    <RingSilhouette className="-ml-6 mt-8 h-16 w-16" />
                  </div>
                ) : (
                  <RingSilhouette className={item.ring} />
                )}
              </div>
              <figcaption className="absolute bottom-4 left-5 right-5">
                <span className="text-[10px] tracking-[0.3em] text-cream/80">
                  {item.num}
                </span>
                <p className="mt-1 font-serif text-base italic text-cream">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs text-cream/75">{item.ko}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 세 가지 약속 */}
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:grid-cols-3 sm:px-8 lg:py-24">
        {[
          {
            icon: Feather,
            title: "한 줄의 편지",
            desc: "안쪽에 새기는 각인으로 오직 두 사람만 아는 문장을 담습니다.",
          },
          {
            icon: Gem,
            title: "정성스러운 세공",
            desc: "장인의 손끝에서 하나씩, 오래 지닐 수 있도록 정직하게 만듭니다.",
          },
          {
            icon: Heart,
            title: "오래 남는 마음",
            desc: "유행이 아닌 감정을 위한 디자인. 시간이 지나도 변하지 않도록.",
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center sm:text-left">
            <Icon size={26} strokeWidth={1.5} className="mx-auto text-burgundy sm:mx-0" />
            <h3 className="mt-5 font-serif text-xl text-brown">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brown-soft">{desc}</p>
          </div>
        ))}
      </section>

      {/* 편지 인용 + CTA */}
      <section className="border-t border-brown/10 bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-serif text-2xl leading-relaxed text-burgundy sm:text-3xl">
            &ldquo;가장 하고 싶은 말은,
            <br />
            가장 가까운 곳에 두었습니다.&rdquo;
          </p>
          <Link
            href="/letters"
            className="mt-10 inline-flex items-center gap-2 text-sm tracking-wide text-brown transition-colors hover:text-burgundy"
          >
            편지 아카이브 보기
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
