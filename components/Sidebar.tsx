import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-14 flex-col items-center justify-between border-r lg:flex">
      {/* Top: logo */}
      <div className="flex w-full flex-col items-center gap-5 pt-3">
        <Link href="/" aria-label="Home" className="grid h-8 w-8 place-items-center">
          <Image src="/logo.svg" alt="Logo" width={62} height={62} />
        </Link>
        <div className="relative flex w-full flex-col items-center gap-4 py-1">
          {/* Background strip behind icons */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[232px] w-10 -translate-x-1/2 rounded-lg bg-gray-50 ring-1 ring-gray-100" />
          {/* Active item with light background */}
          <button aria-current="page" className="relative z-10 grid h-9 w-9 place-items-center rounded-lg bg-white ring-1 ring-indigo-200 shadow-sm">
            <Image src="/icons/image.svg" alt="Images" width={20} height={20} />
          </button>
          {/* Other icons (muted) */}
          <button className="relative z-10 grid h-9 w-9 place-items-center rounded-lg text-gray-400 hover:bg-gray-100">
            <Image src="/icons/duplicate.svg" alt="Duplicate" width={20} height={20} />
          </button>
          <button className="relative z-10 grid h-9 w-9 place-items-center rounded-lg text-gray-400 hover:bg-gray-100">
            <Image src="/icons/news.svg" alt="News" width={20} height={20} />
          </button>
          <button className="relative z-10 grid h-9 w-9 place-items-center rounded-lg text-gray-400 hover:bg-gray-100">
            <Image src="/icons/analytics.svg" alt="Analytics" width={20} height={20} />
          </button>
        </div>
      </div>
      {/* Bottom: help and avatar */}
      <div className="flex w-full flex-col items-center gap-4 pb-3">
        <button className="grid h-8 w-8 place-items-center rounded-full border bg-white text-gray-400">
          <Image src="/icons/help-circle.svg" alt="Help" width={18} height={18} />
        </button>
        <div className="grid h-9 w-9 place-items-center rounded-full border border-purple-200 bg-purple-600 text-sm font-semibold text-white shadow-sm">D</div>
      </div>
    </aside>
  );
}
