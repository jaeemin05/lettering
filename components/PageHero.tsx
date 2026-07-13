// 하위 페이지 상단에서 제목·부제·설명을 감성적으로 보여주는 공통 히어로
type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 pb-14 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
      <h1 className="mt-5 font-serif text-4xl leading-tight text-burgundy sm:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brown-soft">
        {description}
      </p>
      <span className="mx-auto mt-10 block h-px w-16 bg-gold/60" />
    </section>
  );
}
