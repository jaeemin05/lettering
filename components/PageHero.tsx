// 하위 페이지 상단에서 제목·부제·설명을 감성적으로 보여주는 공통 히어로
type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">
      <p className="text-xs uppercase tracking-widest text-gold">{eyebrow}</p>
      <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-burgundy sm:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brown-soft">
        {description}
      </p>
      <span className="mx-auto mt-12 block h-px w-14 bg-brown/25" />
    </section>
  );
}
