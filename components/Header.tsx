"use client";
// 중앙 세리프 로고·상단 유틸 아이콘·하단 내비게이션으로 구성된 전역 스티키 헤더
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { navItems } from "@/lib/nav";
import { CART_EVENT, getCartCount } from "@/lib/cart";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // 장바구니 변경 이벤트를 구독해 뱃지 수량 동기화
  useEffect(() => {
    const update = () => setCartCount(getCartCount());
    update();
    window.addEventListener(CART_EVENT, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(CART_EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b-[0.5px] border-brown/20 bg-warm-beige">
      {/* 상단: 햄버거(모바일) · 중앙 로고 · 우측 유틸 아이콘 */}
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 pt-6 pb-4 sm:px-8">
        {/* 좌측: 모바일 메뉴 버튼 (데스크톱에선 균형용 빈 칸) */}
        <div className="flex items-center">
          <button
            type="button"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-ml-1 p-1 text-brown transition-colors hover:text-burgundy md:hidden"
          >
            {open ? <X size={21} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
          </button>
        </div>

        {/* 중앙 로고 */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex flex-col items-center leading-none"
        >
          <span className="font-serif text-[1.7rem] tracking-tight text-burgundy sm:text-3xl">
            Lette<span className="italic">Ring</span>
          </span>
          <span className="mt-2 hidden text-[9px] uppercase tracking-widest text-brown-soft sm:block">
            engraving your mind
          </span>
        </Link>

        {/* 우측 유틸 아이콘: 검색 · 마이페이지 · 장바구니 */}
        <div className="flex items-center justify-end gap-4 sm:gap-5">
          <button
            type="button"
            aria-label="검색"
            className="p-1 text-brown transition-colors hover:text-burgundy"
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <Link
            href="/mypage"
            aria-label="마이페이지"
            className="hidden p-1 text-brown transition-colors hover:text-burgundy sm:block"
          >
            <User size={19} strokeWidth={1.5} />
          </Link>
          <Link
            href="/cart"
            aria-label="장바구니"
            className="flex items-baseline gap-1 p-1 text-brown transition-colors hover:text-burgundy"
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            <sup className="font-mono text-[10px] leading-none text-burgundy">
              {cartCount}
            </sup>
          </Link>
        </div>
      </div>

      {/* 하단: 중앙 정렬 데스크톱 내비게이션 */}
      <nav className="hidden justify-center gap-10 pb-4 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative text-xs uppercase tracking-widest transition-colors hover:text-burgundy ${
              isActive(item.href) ? "text-burgundy" : "text-brown"
            }`}
          >
            {item.label}
            <span
              className={`absolute -bottom-1.5 left-1/2 h-px -translate-x-1/2 bg-burgundy transition-all duration-300 group-hover:w-full ${
                isActive(item.href) ? "w-full" : "w-0"
              }`}
            />
          </Link>
        ))}
      </nav>

      {/* 모바일 드롭다운 */}
      {open && (
        <nav className="border-t-[0.5px] border-brown/20 bg-warm-beige md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-baseline justify-between border-b-[0.5px] border-brown/10 py-3.5 text-xs uppercase tracking-widest transition-colors last:border-0 hover:text-burgundy ${
                  isActive(item.href) ? "text-burgundy" : "text-brown"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[11px] normal-case tracking-normal text-brown-soft">
                  {item.ko}
                </span>
              </Link>
            ))}
            {/* 모바일에서만 보이는 마이페이지 링크 */}
            <Link
              href="/mypage"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-3.5 text-xs uppercase tracking-widest text-brown transition-colors hover:text-burgundy"
            >
              <User size={14} strokeWidth={1.5} /> My Page
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
