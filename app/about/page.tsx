// 브랜드 철학 "Carry & Love your Emotion"을 담은 About 페이지
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

// 스태거 애니메이션 딜레이 헬퍼
const delay = (s: string) => ({ "--delay": s }) as CSSProperties;

const poeticLines = [
  "만일, 감정이 눈에 보인다면 —",
  "만질 수 있다면 —",
  "몸에 지니고 다닐 수 있다면",
  "어떨까요?",
];

export default function AboutPage() {
  return (
    <article className="mx-auto flex max-w-2xl flex-col items-center px-6 pt-24 pb-32 text-center sm:pt-32">
      {/* 버건디 왁스 실링 */}
      <div className="fade-up wax-seal" aria-hidden>
        L
      </div>

      <p
        className="fade-up mt-14 text-xs uppercase tracking-[0.45em] text-gold"
        style={delay("0.15s")}
      >
        Our Philosophy
      </p>

      <h1
        className="fade-up mt-7 font-serif text-4xl leading-snug text-burgundy sm:text-5xl"
        style={delay("0.25s")}
      >
        Carry &amp; Love
        <br />
        your <span className="italic">Emotion.</span>
      </h1>

      {/* 시적인 질문 — 한 줄씩 떠오르는 카피 */}
      <div className="mt-20 space-y-6 sm:mt-24 sm:space-y-7">
        {poeticLines.map((line, i) => (
          <p
            key={line}
            className="fade-up font-serif text-xl leading-relaxed text-brown sm:text-2xl"
            style={delay(`${0.45 + i * 0.18}s`)}
          >
            {line}
          </p>
        ))}
      </div>

      <span
        className="fade-up mt-20 block h-px w-16 bg-gold/60 sm:mt-24"
        style={delay("1.3s")}
      />

      {/* 브랜드 이야기 */}
      <div
        className="fade-up mt-16 max-w-md space-y-8 text-[15px] leading-loose text-brown-soft sm:mt-20"
        style={delay("1.45s")}
      >
        <p>
          LetteRing은 그 상상에서 시작되었습니다.
          <br />
          스쳐 지나가면 사라질 감정을 붙잡아
          <br />
          만질 수 있는 형태로 빚고,
          <br />
          매일 몸에 지닐 수 있도록.
        </p>
        <p>
          반지 안쪽에 새기는 한 줄의 각인은
          <br />
          부치지 못한 편지의 첫 문장이 됩니다.
          <br />
          보이지 않던 마음이 손끝에서 반짝이는 순간,
          <br />
          감정은 비로소 당신의 것이 됩니다.
        </p>
      </div>

      <p
        className="fade-up mt-16 font-serif text-lg text-burgundy sm:mt-20"
        style={delay("1.6s")}
      >
        감정을 지니고, 아껴 주세요.
      </p>

      <Link
        href="/shop"
        className="fade-up group mt-14 inline-flex items-center gap-2 border border-brown/25 px-9 py-4 text-sm tracking-[0.15em] text-brown transition-colors hover:border-burgundy hover:text-burgundy"
        style={delay("1.75s")}
      >
        마음을 담을 반지 보러 가기
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}
