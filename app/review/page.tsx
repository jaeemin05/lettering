// 사진과 별점이 담긴 고객 후기를 그리드로 보여주는 Review(후기) 페이지
import Image from "next/image";
import { Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import { filmClass, photos, unsplash } from "@/lib/images";

type Review = {
  text: string;
  author: string;
  product: string;
  date: string;
  rating: number;
  img: string;
  alt: string;
};

const reviews: Review[] = [
  {
    text: "남자친구가 부담없이 하기에도 괜찮구 예뻐용",
    author: "김*은",
    product: "기본반지",
    date: "2026.07.02",
    rating: 5,
    img: photos.necklaceSkin,
    alt: "자연광 아래 살결 위에 얹힌 가는 금목걸이",
  },
  {
    text: "커플로 샀는데 너무 이뻐요ㅠㅠ 각인도 선명하게 잘 나왔어요",
    author: "이*현",
    product: "꼬임반지",
    date: "2026.06.21",
    rating: 5,
    img: photos.coupleHands,
    alt: "부케 옆에 포개어진, 반지를 낀 두 사람의 손",
  },
  {
    text: "각인 문구 보고 울 뻔했어요.. 기념일 선물로 최고입니다",
    author: "박*아",
    product: "디자인반지",
    date: "2026.06.09",
    rating: 5,
    img: photos.penLetter,
    alt: "편지지 위에 글을 쓰고 있는 만년필",
  },
  {
    text: "생각보다 더 고급스러워요! 포장이 진짜 편지처럼 와서 감동",
    author: "최*준",
    product: "기본반지",
    date: "2026.05.30",
    rating: 5,
    img: photos.goldBracelet,
    alt: "핑크빛 배경 위의 골드 팔찌",
  },
  {
    text: "매일 끼고 다니는데 두 달째 변색 없이 그대로예요",
    author: "정*림",
    product: "꼬임반지",
    date: "2026.05.11",
    rating: 4,
    img: photos.twistedGold,
    alt: "돌 위에 놓인 꼬임 형태의 골드 링",
  },
  {
    text: "손이 예뻐 보이는 반지는 처음이에요. 재구매 의사 100%",
    author: "한*서",
    product: "디자인반지",
    date: "2026.04.26",
    rating: 5,
    img: photos.pinkRing,
    alt: "핑크 원석이 세팅된 골드 반지",
  },
];

// 다크 골드 별점 (빈 별은 은은한 브라운 외곽선)
function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`별점 5점 만점에 ${rating}점`}
    >
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? (
          <Star key={i} size={size} className="fill-gold text-gold" strokeWidth={0} />
        ) : (
          <Star key={i} size={size} className="text-brown/25" strokeWidth={1.5} />
        ),
      )}
    </div>
  );
}

export default function ReviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Review"
        title="반지가 도착한 순간"
        description="LetteRing과 함께한 분들의 이야기와 사진을 모았습니다."
      />

      {/* 평점 요약 */}
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 pb-14">
        <Stars rating={5} size={18} />
        <p className="font-serif text-3xl text-burgundy">
          4.9<span className="mx-1 text-brown-soft">/</span>
          <span className="text-xl text-brown-soft">5.0</span>
        </p>
        <p className="text-xs tracking-wide text-brown-soft">
          126개의 후기가 도착했습니다
        </p>
      </div>

      {/* 후기 그리드 */}
      <section className="mx-auto max-w-6xl px-6 pb-28 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.author + review.date}
              className="group overflow-hidden border-[0.5px] border-brown/20 bg-cream transition-transform duration-500 hover:-translate-y-1.5"
            >
              {/* 라이프스타일 사진: 호버 시 부드러운 줌 */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="grain relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image
                    src={unsplash(review.img, 600)}
                    alt={review.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={filmClass}
                  />
                </div>
              </div>

              <div className="px-7 py-6">
                <div className="flex items-center justify-between">
                  <Stars rating={review.rating} />
                  <span className="border border-burgundy/25 px-2.5 py-1 text-[10px] tracking-wide text-burgundy">
                    {review.product}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brown">
                  {review.text}
                </p>
                <div className="mt-5 flex items-center justify-between border-t-[0.5px] border-brown/15 pt-4 text-xs text-brown-soft">
                  <span>{review.author} 님</span>
                  <span className="font-mono">{review.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-16 text-center text-xs tracking-wide text-brown-soft">
          구매 후 마이페이지에서 후기를 남기실 수 있어요 · 사진 후기는 적립금 2,000원
        </p>
      </section>
    </>
  );
}
