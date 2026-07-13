// Unsplash 사진 URL 헬퍼 — 전 페이지 이미지의 단일 소스 (전부 실물 확인 후 선별한 warm/analogue 톤)
export function unsplash(id: string, w = 800): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=60&w=${w}`;
}

// 사진 ID 목록 (용도별 별칭)
export const photos = {
  /** 찢어진 종이 위의 커플 골드 밴드 — 히어로·기본반지 */
  bandsOnPaper: "1606800052052-a08af7148866",
  /** 강한 플래시 그림자, 돌 위의 꼬임 골드 후프 — 꼬임반지 */
  twistedGold: "1617038260897-41a1f14a8ca0",
  /** 자갈 위의 원석 골드 반지들, 크림 실크 — 디자인반지 */
  stoneRings: "1608042314453-ae338d80c427",
  /** 따뜻한 브라운 보케의 금목걸이 — 무디 골드 */
  moodyGold: "1599643478518-a784e5dc4c8f",
  /** 부케를 든 커플의 손과 반지 */
  coupleHands: "1529634806980-85c3dd6d34ac",
  /** 핑크빛 조명의 골드 팔찌 */
  goldBracelet: "1611591437281-460bfbe1220a",
  /** 버건디 벨벳 상자 속 진주 목걸이 */
  burgundyBox: "1515562141207-7a88fb7ce338",
  /** 버건디 실크 원단 텍스처 */
  burgundySilk: "1518893063132-36e46dbe2428",
  /** 어두운 배경의 무디한 꽃다발 */
  moodyFlowers: "1457089328109-e5d9bd499191",
  /** 줄노트 편지 위에 글을 쓰는 만년필 */
  penLetter: "1455390582262-044cdead277a",
  /** 살결 위의 가는 금목걸이, 자연광 */
  necklaceSkin: "1610694955371-d4a3e0ce4b52",
  /** 핑크 원석 반지 */
  pinkRing: "1603561591411-07134e71a2a9",
} as const;

/** 필름 감성 통일용 클래스: 살짝 바랜 채도 + 세피아 웜톤 */
export const filmClass = "object-cover saturate-[0.85] sepia-[0.18] contrast-[0.97]";
