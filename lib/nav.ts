// Header와 Footer가 공유하는 전역 내비게이션 링크 목록
export type NavItem = {
  href: string;
  label: string;
  ko: string;
};

export const navItems: NavItem[] = [
  { href: "/about", label: "About", ko: "브랜드 이야기" },
  { href: "/shop", label: "Shop", ko: "제품" },
  { href: "/letters", label: "Letters", ko: "편지" },
  { href: "/review", label: "Review", ko: "후기" },
  { href: "/notice", label: "Notice", ko: "공지" },
];
