// 사진과 별점이 담긴 고객 후기를 그리드로 보여주는 Review(후기) 페이지
import { Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import RingSilhouette from "@/components/RingSilhouette";

type Review = {
  text: string;
  author: string;
  product: string;
  date: string;
  rating: number;
  photo: string;
  scene: "couple" | "single" | "bracelet" | "letter";
};

const reviews: Review[] = [
  {
    text: "남자친구가 부담없이 하기에도 괜찮구 예뻐용",
    author: "김*은",
    product: "기본반지",
    date: "2026.07.02",
    rating: 5,
    photo: "photo-warm-a",
    scene: "single",
  },
  {
    text: "커플로 샀는데 너무 이뻐요ㅠㅠ 각인도 선명하게 잘 나왔어요",
    author: "이*현",
    product: "꼬임반지",
    date: "2026.06.21",
    rating: 5,
    photo: "photo-warm-b",
    scene: "couple",
  },
  {
    text: "각인 문구 보고 울 뻔했어요.. 기념일 선물로 최고입니다",
    author: "박*아",
    product: "디자인반지",
    date: "2026.06.09",
    rating: 5,
    photo: "photo-warm-c",
    scene: "letter",
  },
  {
    text: "생각보다 더 고급스러워요! 포장이 진짜 편지처럼 와서 감동",
    author: "최*준",
    product: "기본반지",
    date: "2026.05.30",
    rating: 5,
    photo: "photo-warm-d",
    scene: "bracelet",
  },
  {
    text: "매일 끼고 다니는데 두 달째 변색 없이 그대로예요",
    author: "정*림",
    product: "꼬임반지",
    date: "2026.05.11",
    rating: 4,
    photo: "photo-warm-b",
    scene: "single",
  },
  {
    text: "손이 예뻐 보이는 반지는 처음이에요. 재구매 의사 100%",
    author: "한*서",
    product: "디자인반지",
    date: "2026.04.26",
    rating: 5,
    photo: "photo-warm-a",
    scene: "couple",
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

// 후기 사진 플레이스홀더 속 연출 장면
function ReviewScene({ scene }: { scene: Review["scene"] }) {
  switch (scene) {
    case "couple":
      // 나란히 포개어진 커플링
      return (
        <div className="flex items-center">
          <RingSilhouette className="h-20 w-20" />
          <RingSilhouette className="-ml-6 mt-7 h-16 w-16" />
        </div>
      );
    case "bracelet":
      // 프레임 밖으로 크게 걸쳐진 팔찌
      return (
        <RingSilhouette className="h-48 w-48 translate-x-16 translate-y-16" />
      );
    case "letter":
      // 손편지 위에 놓인 반지
      return (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="absolute inset-x-10 bottom-10 h-24 rotate-[4deg] rounded-sm bg-cream/45 shadow-[0_8px_18px_-10px_rgba(74,58,53,0.4)]">
            <div className="mx-4 mt-4 space-y-2.5">
              {[75, 60, 40].map((w) => (
                <div key={w} className="h-px bg-brown/25" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
          <RingSilhouette className="h-16 w-16 -translate-y-3" />
        </div>
      );
    default:
      return <RingSilhouette className="h-24 w-24" />;
  }
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
              className="group overflow-hidden rounded-sm border border-brown/10 bg-cream shadow-[0_18px_40px_-22px_rgba(74,58,53,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_52px_-24px_rgba(74,58,53,0.45)]"
            >
              {/* 라이프스타일 사진: 호버 시 부드러운 줌 */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className={`grain ${review.photo} flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105`}
                >
                  <ReviewScene scene={review.scene} />
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
                <div className="mt-5 flex items-center justify-between border-t border-brown/10 pt-4 text-xs text-brown-soft">
                  <span>{review.author} 님</span>
                  <span>{review.date}</span>
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
