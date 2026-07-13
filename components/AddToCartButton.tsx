"use client";
// 상품을 장바구니에 담고 잔잔한 완료 피드백을 보여주는 버튼
import { useEffect, useRef, useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { addToCart } from "@/lib/cart";

export default function AddToCartButton({ productId }: { productId: string }) {
  const [added, setAdded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const handleClick = () => {
    addToCart(productId);
    setAdded(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="장바구니에 담기"
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs tracking-wide transition-all duration-300 ${
        added
          ? "bg-burgundy text-warm-beige"
          : "border border-brown/20 text-brown hover:border-burgundy hover:text-burgundy"
      }`}
    >
      {added ? (
        <>
          <Check size={13} strokeWidth={2} /> 담았어요
        </>
      ) : (
        <>
          <ShoppingBag size={13} strokeWidth={1.5} /> 담기
        </>
      )}
    </button>
  );
}
