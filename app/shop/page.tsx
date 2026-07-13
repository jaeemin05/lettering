// 큐레이션 갤러리처럼 비대칭 배치로 상품을 보여주는 Shop 페이지
import { AtSign } from "lucide-react";
import PageHero from "@/components/PageHero";
import RingSilhouette from "@/components/RingSilhouette";
import AddToCartButton from "@/components/AddToCartButton";
import { formatPrice, products } from "@/lib/products";

// 큐레이션 배치: 각 상품이 차지하는 그리드 위치·이미지 비율을 다르게
const placements = [
  {
    // 01 좌측 대형
    wrap: "lg:col-span-6 lg:col-start-1",
    aspect: "aspect-[4/5]",
    ring: "h-32 w-32",
    seal: true,
  },
  {
    // 02 우측, 작게, 아래로 밀림
    wrap: "lg:col-span-4 lg:col-start-8 lg:mt-40",
    aspect: "aspect-square",
    ring: "h-24 w-24",
    seal: false,
  },
  {
    // 03 중앙에서 살짝 벗어난 위치
    wrap: "lg:col-span-5 lg:col-start-3 lg:mt-28",
    aspect: "aspect-[5/4]",
    ring: "h-24 w-24",
    seal: false,
  },
];

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Collection"
        title="당신의 문장을 담을 반지"
        description="모든 반지의 안쪽에는 원하는 문장을 각인해 드립니다. 마음에 드는 장면을 골라 주세요."
      />

      {/* 피드 헤더: 계정 핸들 */}
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-1.5 px-6 pb-16">
        <AtSign size={13} strokeWidth={1.5} className="text-brown-soft" />
        <span className="font-mono text-xs text-brown-soft">
          lette.rin9 의 피드에서
        </span>
      </div>

      {/* 비대칭 큐레이션 그리드 */}
      <section className="mx-auto max-w-6xl px-6 pb-32 sm:px-8">
        <div className="flex flex-col gap-24 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          {products.map((product, i) => {
            const p = placements[i % placements.length];
            return (
              <article key={product.id} className={`group ${p.wrap}`}>
                {/* 사진: 얇은 선 프레임, 호버 시 아주 느린 줌 */}
                <div className="relative overflow-hidden border-[0.5px] border-brown/20">
                  <div
                    className={`grain ${product.photo} ${p.aspect} flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                  >
                    <RingSilhouette variant={product.variant} className={p.ring} />
                  </div>
                  {/* 시그니처 왁스 실 뱃지 */}
                  {p.seal && (
                    <span
                      className="wax-seal-mini absolute right-5 top-5"
                      aria-hidden
                    >
                      L
                    </span>
                  )}
                </div>

                {/* 라벨: 번호·이름·가격은 택에 손도장 찍은 느낌으로 */}
                <div className="mt-6">
                  <p className="font-mono text-[11px] text-brown-soft">
                    No.0{i + 1} — 각인 가능
                  </p>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-brown-soft">
                    {product.caption}
                  </p>
                  <div className="mt-4 flex items-end justify-between border-t-[0.5px] border-brown/20 pt-4">
                    <div>
                      <h3 className="font-serif text-2xl tracking-tight text-brown">
                        {product.name}
                        <span className="ml-2.5 text-sm italic text-brown-soft">
                          {product.en}
                        </span>
                      </h3>
                      <p className="mt-1.5 font-mono text-sm text-burgundy">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <AddToCartButton productId={product.id} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-28 text-center font-mono text-[11px] text-brown-soft">
          모든 각인은 주문 후 장인이 직접 새겨 드립니다 · 제작 기간 3–5일
        </p>
      </section>
    </>
  );
}
