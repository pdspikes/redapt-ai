import Reveal from "./Reveal";

interface Stat {
  value: string;
  caption: string;
}

const STATS: Stat[] = [
  { value: "220+", caption: "Technologists on call" },
  { value: "40+", caption: "Countries served via global logistics" },
  { value: "200+", caption: "Partner engineering certifications" },
  { value: "30+", caption: "Years of delivering business-critical technology" },
];

interface StatsBandProps {
  stats?: Stat[];
}

export default function StatsBand({ stats = STATS }: StatsBandProps) {
  return (
    <section className="bg-bg-dark px-6 py-20 md:px-16">
      <Reveal className="mx-auto grid max-w-[1100px] grid-cols-2 gap-10 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.caption}>
            <div className="text-[36px] font-extrabold text-accent-light md:text-[46px]">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-white">{stat.caption}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
