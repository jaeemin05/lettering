// 미니멀 게시판 테이블로 공지를 안내하는 Notice(공지) 페이지
import PageHero from "@/components/PageHero";

type Notice = {
  no: string;
  pinned: boolean;
  title: string;
  date: string;
};

const notices: Notice[] = [
  {
    no: "공지",
    pinned: true,
    title: "기본 안내 (배송 / 취소 / 교환 / 환불 / AS 등)",
    date: "2025.12.15",
  },
  {
    no: "공지",
    pinned: true,
    title: "제품 안내",
    date: "2026.01.08",
  },
  {
    no: "1",
    pinned: false,
    title: "LetteRing 온라인 스토어 오픈 소식",
    date: "2026.07.13",
  },
];

export default function NoticePage() {
  return (
    <>
      <PageHero
        eyebrow="Notice"
        title="공지사항"
        description="LetteRing의 소식과 안내를 전합니다."
      />

      <section className="mx-auto max-w-3xl px-6 pb-28 sm:px-8">
        <table className="w-full border-t-2 border-burgundy text-left">
          <thead>
            <tr className="border-b border-brown/15 text-[11px] uppercase tracking-[0.25em] text-brown-soft">
              <th scope="col" className="w-16 py-3.5 pl-1 font-normal sm:w-20">
                No.
              </th>
              <th scope="col" className="py-3.5 font-normal">
                Title
              </th>
              <th scope="col" className="w-24 py-3.5 pr-1 text-right font-normal sm:w-28">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr
                key={notice.title}
                className="group border-b border-brown/10 transition-colors hover:bg-cream"
              >
                <td className="py-5 pl-1 align-middle">
                  {notice.pinned ? (
                    <span className="inline-block bg-burgundy px-2.5 py-1 text-[10px] leading-none text-warm-beige">
                      공지
                    </span>
                  ) : (
                    <span className="text-xs text-brown-soft">{notice.no}</span>
                  )}
                </td>
                <td className="py-5 align-middle">
                  <span
                    className={`text-sm transition-colors group-hover:text-burgundy sm:text-[15px] ${
                      notice.pinned ? "font-medium text-brown" : "text-brown"
                    }`}
                  >
                    {notice.title}
                  </span>
                </td>
                <td className="py-5 pr-1 text-right align-middle text-xs text-brown-soft">
                  {notice.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-12 text-center text-xs tracking-wide text-brown-soft">
          문의는 hello@lettering.kr 또는 고객센터 070-1234-5678로 부탁드립니다.
        </p>
      </section>
    </>
  );
}
