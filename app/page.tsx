// 브랜드 감성을 전하는 메인 랜딩 페이지 — 히어로·갤러리·약속·편지 인용
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, AtSign } from "lucide-react";
import { filmClass, photos, unsplash } from "@/lib/images";

// 스태거 애니메이션 딜레이 헬퍼
const delay = (s: string) => ({ "--delay": s }) as CSSProperties;

const gallery = [
  {
    num: "01",
    title: "Morning Letter",
    ko: "아침, 첫 문장을 새기다",
    img: photos.penLetter,
    alt: "줄노트 편지 위에 글을 쓰는 만년필",
  },
  {
    num: "02",
    title: "Amber Hour",
    ko: "노을빛에 반짝이는 금",
    img: photos.moodyGold,
    alt: "따뜻한 브라운 톤 배경의 금목걸이",
  },
  {
    num: "03",
    title: "Sealed Heart",
    ko: "봉인된 마음",
    img: photos.burgundySilk,
    alt: "깊은 버건디색 실크 원단의 결",
  },
  {
    num: "04",
    title: "Quiet Vow",
    ko: "조용한 약속",
    img: photos.burgundyBox,
    alt: "버건디 벨벳 상자에 담긴 진주 목걸이",
  },
  {
    num: "05",
    title: "Hand in Hand",
    ko: "포개어진 손",
    img: photos.coupleHands,
    alt: "부케 옆에 포개어진, 반지를 낀 두 사람의 손",
  },
  {
    num: "06",
    title: "P.S.",
    ko: "추신, 사랑해요",
    img: photos.moodyFlowers,
    alt: "어두운 배경 앞의 붉은 꽃다발",
  },
];

const promises = [
  {
    num: "01",
    title: "한 줄의 편지",
    desc: "안쪽에 새기는 각인으로 오직 두 사람만 아는 문장을 담습니다.",
  },
  {
    num: "02",
    title: "정성스러운 세공",
    desc: "장인의 손끝에서 하나씩, 오래 지닐 수 있도록 정직하게 만듭니다.",
  },
  {
    num: "03",
    title: "오래 남는 마음",
    desc: "유행이 아닌 감정을 위한 디자인. 시간이 지나도 변하지 않도록.",
  },
];

export default function Home() {
  return (
    <>
      {/* 히어로: 좌측 카피 · 우측 대형 사진 */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 pt-20 pb-24 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pt-28 lg:pb-32">
        <div>
          <p className="fade-up text-xs uppercase tracking-widest text-gold">
            Engraving your mind on a ring
          </p>
          <h1
            className="fade-up mt-7 font-serif text-5xl leading-[1.12] tracking-tight text-burgundy sm:text-6xl"
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
            className="fade-up mt-12 flex flex-col gap-4 sm:flex-row"
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
              className="inline-flex items-center justify-center gap-2 border-[0.5px] border-brown/30 px-9 py-4 text-sm tracking-[0.15em] text-brown transition-colors hover:border-burgundy hover:text-burgundy"
            >
              브랜드 이야기
            </Link>
          </div>
        </div>

        {/* 대형 사진: 편지지 위에 놓인 커플 밴드 */}
        <div className="fade-up relative mx-auto w-full max-w-md" style={delay("0.25s")}>
          <div className="grain relative aspect-[4/5] border-[0.5px] border-brown/20">
            <Image
              src={unsplash(photos.bandsOnPaper, 900)}
              alt="찢어진 편지지 위에 놓인 두 개의 골드 밴드 반지"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className={filmClass}
            />
          </div>

          {/* 모서리에 겹쳐진 손편지 카드 */}
          <div className="absolute -bottom-9 -left-4 w-56 -rotate-[4deg] rounded-sm border-[0.5px] border-brown/25 bg-cream px-6 py-5 sm:-left-8">
            <p className="font-serif text-sm leading-relaxed text-brown">
              &ldquo;늘 고마워요.
              <br />이 마음, 여기 새겨둘게요.&rdquo;
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-brown-soft">
                from. J
              </span>
              <span className="wax-seal-mini scale-[0.55]" aria-hidden>
                L
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 갤러리: 따뜻한 빛 아래의 반지들 — 가로 스크롤 피드 */}
      <section className="border-t-[0.5px] border-brown/20 py-24 lg:py-32">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-6 sm:px-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold">Gallery</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-burgundy sm:text-4xl">
              따뜻한 빛 아래에서
            </h2>
          </div>
          <a
            href="https://instagram.com"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-brown-soft transition-colors hover:text-burgundy"
          >
            <AtSign size={14} strokeWidth={1.5} />
            lettering.official
          </a>
        </div>

        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:px-8 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          {gallery.map((item) => (
            <figure
              key={item.num}
              className="relative aspect-square w-60 shrink-0 snap-center border-[0.5px] border-brown/20 sm:w-72"
            >
              <div className="grain relative h-full w-full">
                <Image
                  src={unsplash(item.img, 600)}
                  alt={item.alt}
                  fill
                  sizes="288px"
                  className={filmClass}
                />
              </div>
              {/* 캡션 가독성을 위한 하단 그라디언트 */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brown/60 to-transparent" />
              <figcaption className="absolute bottom-4 left-5 right-5">
                <span className="font-mono text-[10px] text-cream/80">
                  No.{item.num}
                </span>
                <p className="mt-1 font-serif text-base italic tracking-tight text-cream">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs text-cream/75">{item.ko}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 세 가지 약속 */}
      <section className="border-t-[0.5px] border-brown/20 py-24 lg:py-32">
        <div className="mx-auto grid max-w-5xl gap-14 px-6 sm:grid-cols-3 sm:gap-10 sm:px-8">
          {promises.map(({ num, title, desc }) => (
            <div key={num}>
              <span className="font-mono text-sm text-burgundy">({num})</span>
              <h3 className="mt-5 font-serif text-xl tracking-tight text-brown">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brown-soft">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 편지 인용 + CTA */}
      <section className="border-t-[0.5px] border-brown/20">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
          <p className="font-serif text-2xl leading-relaxed tracking-tight text-burgundy sm:text-3xl">
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
