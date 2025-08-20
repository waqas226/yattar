import HeroCover from "./hero/HeroCover";

type Props = {
  imageSrc?: string; // e.g., "/images/your-cover.jpg"
};

export default function Hero({ imageSrc = "/images/hero-cover.jpg" }: Props) {
  return (
    <section className="relative mb-8 overflow-hidden text-white">
      {/* Cover background */}
      <HeroCover imageSrc={imageSrc} height={360} />

      {/* Top-left Home chip */}
      <div className="absolute left-4 top-4 z-10">
        <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2 py-0.5 text-xs font-medium text-white/90 ring-1 ring-white/30 backdrop-blur">
          Home
        </span>
      </div>

      {/* Top-right actions */}
      <div className="absolute right-4 top-4 z-10 flex items-center gap-2.5">
        <button className="rounded-full border-2 border-dashed border-white/70 bg-transparent px-3.5 py-1 text-[12px] font-medium text-white/95 backdrop-blur-sm transition-colors hover:bg-white/10">Add Social Media</button>
        <button className="rounded-full border border-white/70 bg-transparent px-3.5 py-1 text-[12px] font-medium text-white/95 backdrop-blur-sm transition-colors hover:bg-white/10">Subscribe</button>
      </div>

      {/* Identity left-centered in container */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto flex w-full max-w-[960px] items-center gap-6 px-6">
          <div className="relative grid h-[112px] w-[112px] place-items-center rounded-full bg-purple-600 text-5xl font-semibold shadow-xl md:h-[120px] md:w-[120px]">
            <span className="text-white">D</span>
            <span className="pointer-events-none absolute inset-0 rounded-full ring-[5px] ring-white/95" />
          </div>
          <div className="pt-2">
            <h1 className="text-3xl font-semibold tracking-tight drop-shadow-sm md:text-4xl">Airwave</h1>
            <p className="mt-2 inline-block rounded-md border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
              Welcome to my podcast
            </p>
          </div>
        </div>
      </div>

      {/* Edit cover aligned to card edge */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto w-full max-w-[960px] px-2">
          <div className="flex justify-end">
            <button
              aria-label="Edit Cover"
              className="pointer-events-auto mb-8 inline-flex items-center gap-2 rounded-lg border border-white/70 bg-transparent px-2.5 py-1 text-[12px] font-medium text-white/95 transition-colors hover:bg-white/10"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
              Edit Cover
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
