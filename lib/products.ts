// 판매 중인 반지 상품 데이터 (Shop 페이지의 단일 소스)
export type RingVariant = "basic" | "twisted" | "design";

export type Product = {
  id: string;
  name: string;
  en: string;
  price: number;
  photo: string;
  caption: string;
  variant: RingVariant;
};

export const products: Product[] = [
  {
    id: "basic-ring",
    name: "기본반지",
    en: "Basic Ring",
    price: 38000,
    photo: "photo-warm-a",
    caption: "가장 담백한 밴드에, 가장 진심인 문장을.",
    variant: "basic",
  },
  {
    id: "twisted-ring",
    name: "꼬임반지",
    en: "Twisted Ring",
    price: 41000,
    photo: "photo-warm-b",
    caption: "서로 다른 두 마음이 하나로 꼬여 흐릅니다.",
    variant: "twisted",
  },
  {
    id: "design-ring",
    name: "디자인반지",
    en: "Design Ring",
    price: 48000,
    photo: "photo-warm-c",
    caption: "빛나는 순간 하나를 밴드 위에 얹었습니다.",
    variant: "design",
  },
];

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ko-KR")}원`;
}
