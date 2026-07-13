// 쇼핑몰 표준 사업자 정보·고객센터·내비게이션을 담은 전역 푸터
import Link from "next/link";
import { navItems } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t-[0.5px] border-brown/20">
      {/* 상단: 브랜드 · 내비 · 고객센터 */}
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* 브랜드 */}
          <div>
            <p className="font-serif text-2xl tracking-tight text-burgundy">
              Lette<span className="italic">Ring</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brown-soft">
              마음을 반지에 새깁니다.
              <br />
              말로 다 하지 못한 이야기를 가장 가까운 곳에 오래 간직하세요.
            </p>
          </div>

          {/* 내비게이션 */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brown">Menu</p>
            <nav className="mt-6 flex flex-col gap-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-brown-soft transition-colors hover:text-burgundy"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 고객센터 */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brown">
              Customer Center
            </p>
            <p className="mt-6 font-mono text-lg text-brown">070-1234-5678</p>
            <p className="mt-2 text-sm leading-relaxed text-brown-soft">
              평일 10:00 – 18:00 (점심 12:30 – 13:30)
              <br />
              주말·공휴일 휴무
            </p>
            <a
              href="mailto:hello@lettering.kr"
              className="mt-3 inline-block font-mono text-xs text-brown-soft underline underline-offset-4 transition-colors hover:text-burgundy"
            >
              hello@lettering.kr
            </a>
          </div>
        </div>
      </div>

      {/* 하단: 사업자 정보 */}
      <div className="border-t-[0.5px] border-brown/15">
        <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8">
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[11px] leading-relaxed text-brown-soft">
            <span>상호명 : LetteRing (레터링)</span>
            <span>대표 : 김진심</span>
            <span>주소 : 서울특별시 성동구 성수일로 77, 3층</span>
            <span>사업자등록번호 : 123-45-67890</span>
            <span>통신판매업신고 : 제2026-서울성동-0713호</span>
            <span>개인정보관리책임자 : 김진심</span>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-5 text-xs text-brown-soft">
              <Link href="/notice" className="transition-colors hover:text-burgundy">
                이용약관
              </Link>
              <Link
                href="/notice"
                className="font-medium text-brown transition-colors hover:text-burgundy"
              >
                개인정보처리방침
              </Link>
            </div>
            <p className="font-mono text-[11px] text-brown-soft">
              © {new Date().getFullYear()} LetteRing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
