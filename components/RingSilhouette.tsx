// 따뜻한 조명 아래 반지를 표현하는 링 실루엣 플레이스홀더 (실제 사진 전까지 사용)
import type { RingVariant } from "@/lib/products";

export default function RingSilhouette({
  className = "",
  variant = "basic",
}: {
  className?: string;
  variant?: RingVariant;
}) {
  if (variant === "twisted") {
    // 두 가닥이 꼬인 반지: 링 두 개를 엇갈려 겹침
    return (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 -rotate-12 rounded-full border-[5px] border-[#f2e3cb]/90 shadow-[inset_0_3px_10px_rgba(74,58,53,0.3),0_18px_30px_-14px_rgba(74,58,53,0.5)]" />
        <div className="absolute inset-1 rotate-12 rounded-full border-[5px] border-[#e8d2b0]/80 shadow-[inset_0_2px_8px_rgba(74,58,53,0.25)]" />
        <span className="absolute left-1/4 top-0 h-1.5 w-4 -rotate-12 rounded-full bg-cream/80 blur-[1px]" />
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-full border-[7px] border-[#f2e3cb]/90 shadow-[inset_0_3px_10px_rgba(74,58,53,0.35),0_22px_36px_-16px_rgba(74,58,53,0.55)] ${className}`}
    >
      {/* 금속 밴드에 맺힌 하이라이트 */}
      <span className="absolute left-1/4 top-0.5 h-1.5 w-4 -rotate-12 rounded-full bg-cream/80 blur-[1px]" />
      {/* 디자인반지: 밴드 위에 얹힌 골드 포인트 */}
      {variant === "design" && (
        <span className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-gradient-to-br from-[#d9b98a] to-[#9a7440] shadow-[0_2px_6px_rgba(74,58,53,0.4)]" />
      )}
    </div>
  );
}
