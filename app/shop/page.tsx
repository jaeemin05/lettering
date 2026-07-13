// 인스타그램 피드 감성의 폴라로이드 카드로 상품을 보여주는 Shop 페이지
import { AtSign, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import RingSilhouette from "@/components/RingSilhouette";
import AddToCartButton from "@/components/AddToCartButton";
import { formatPrice, products } from "@/lib/products";

// 폴라로이드가 무심하게 놓인 느낌의 카드별 기울기
const tilts = ["-rotate-[1.3deg]", "rotate-[0.8deg]", "-rotate-[0.6deg]"];

const ringSizes = {
  basic: "h-24 w-24",
  twisted: "h-24 w-24",
  design: "h-24 w-24",
} as const;

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Collection"
        title="당신의 문장을 담을 반지"
        description="모든 반지의 안쪽에는 원하는 문장을 각인해 드립니다. 마음에 드는 장면을 골라 주세요."
      />

      {/* 피드 헤더: 계정 핸들 */}
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-1.5 px-6 pb-10">
        <AtSign size={14} strokeWidth={1.5} className="text-brown-soft" />
        <span className="text-sm tracking-wide text-brown-soft">
          lette.rin9 의 피드에서
        </span>
      </div>

      {/* 3열 폴라로이드 그리드 */}
      <section className="mx-auto max-w-5xl px-6 pb-28 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <article
              key={product.id}
              className={`group bg-cream p-4 pb-6 shadow-[0_20px_44px_-20px_rgba(74,58,53,0.4)] transition-all duration-500 hover:rotate-0 hover:shadow-[0_28px_56px_-24px_rgba(74,58,53,0.5)] ${tilts[i % tilts.length]}`}
            >
              {/* 포스트 상단: 계정 · 좋아요 */}
              <div className="flex items-center justify-between px-1 pb-3">
                <span className="text-[11px] tracking-wide text-brown-soft">
                  lette.rin9
                </span>
                <Heart
                  size={14}
                  strokeWidth={1.5}
                  className="text-brown-soft transition-colors duration-300 group-hover:fill-burgundy group-hover:text-burgundy"
                />
              </div>

              {/* 정사각 사진: 호버 시 부드러운 줌 */}
              <div className="relative aspect-square overflow-hidden">
                <div
                  className={`grain ${product.photo} flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105`}
                >
                  <RingSilhouette
                    variant={product.variant}
                    className={ringSizes[product.variant]}
                  />
                </div>
              </div>

              {/* 폴라로이드 하단: 캡션 · 상품명 · 가격 · 담기 */}
              <div className="px-1 pt-5">
                <p className="font-serif text-sm italic leading-relaxed text-brown-soft">
                  {product.caption}
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h3 className="text-base text-brown">
                      {product.name}
                      <span className="ml-2 text-xs text-brown-soft">
                        {product.en}
                      </span>
                    </h3>
                    <p className="mt-1 font-serif text-lg text-burgundy">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  <AddToCartButton productId={product.id} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-16 text-center text-xs tracking-wide text-brown-soft">
          모든 각인은 주문 후 장인이 직접 새겨 드립니다 · 제작 기간 3–5일
        </p>
      </section>
    </>
  );
}
