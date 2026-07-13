// 판매 중인 반지 상품 데이터 (Shop 페이지의 단일 소스)
import { photos, unsplash } from "@/lib/images";

export type Product = {
  id: string;
  name: string;
  en: string;
  price: number;
  image: string;
  alt: string;
  caption: string;
};

export const products: Product[] = [
  {
    id: "basic-ring",
    name: "기본반지",
    en: "Basic Ring",
    price: 38000,
    image: unsplash(photos.bandsOnPaper),
    alt: "찢어진 편지지 위에 놓인 두 개의 골드 밴드 반지",
    caption: "가장 담백한 밴드에, 가장 진심인 문장을.",
  },
  {
    id: "twisted-ring",
    name: "꼬임반지",
    en: "Twisted Ring",
    price: 41000,
    image: unsplash(photos.twistedGold),
    alt: "돌 위에 놓인 꼬임 형태의 골드 링, 강한 자연광 그림자",
    caption: "서로 다른 두 마음이 하나로 꼬여 흐릅니다.",
  },
  {
    id: "design-ring",
    name: "디자인반지",
    en: "Design Ring",
    price: 48000,
    image: unsplash(photos.stoneRings),
    alt: "크림색 실크와 자갈 위에 놓인 원석 장식 골드 반지들",
    caption: "빛나는 순간 하나를 밴드 위에 얹었습니다.",
  },
];

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ko-KR")}원`;
}
