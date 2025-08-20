import Image from "next/image";

const contents = [
  {
    title: "Neuroscience Expert (Dr. Tara Swart): Evidence We Can Communicate Afte",
    date: "August 14, 2025",
    category: "Video • The Diary of a CEO",
    // YouTube: https://www.youtube.com/watch?v=LbazZiuh2A4
    image: "https://img.youtube.com/vi/LbazZiuh2A4/hqdefault.jpg",
  },
  {
    title: "Steve Vai | The Magnificent Others with Billy Corgan",
    date: "August 13, 2025",
    category: "Video • The Diary of a CEO",
    // YouTube: https://www.youtube.com/watch?v=ktqLTlGg94k
    image: "https://img.youtube.com/vi/ktqLTlGg94k/hqdefault.jpg",
  },
  {
    title: "Top Psychologist, Donald Hoffman: Seeing True Reality Would Kill Us!",
    date: "July 31, 2025",
    category: "Video • The Diary of a CEO",
    image: "",
  },
  {
    title: "No. 1 Communication Expert: This Speaking Mistake Makes People",
    date: "March 10, 2025",
    category: "Video • The Diary of a CEO",
    image: "",
  },
  {
    title: "The Mindset Doctor: The Secret Man Behind The World's Top Performers",
    date: "January 23, 2023",
    category: "Video • The Diary of a CEO",
    image: "",
  },
];

export default function ContentGrid() {
  return (
    <section className="px-6 py-5">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
        {contents.map((c, idx) => (
          <article key={idx} className="group">
            {/* Thumbnail */}
            <div className="relative mb-3 h-[180px] w-full overflow-hidden rounded-lg bg-gray-100">
              {c.image ? (
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority={idx === 0}
                />
              ) : (
                <div className="h-full w-full" />
              )}
            </div>
            {/* Title */}
            <h2 className="mb-2 line-clamp-2 text-[18px] font-semibold leading-6 text-gray-900 group-hover:underline">
              {c.title}
            </h2>
            {/* Meta */}
            <div className="flex items-center gap-2 text-[13px] text-gray-500">
              <Image src="/globe.svg" alt="Source" width={14} height={14} />
              <span>{c.date}</span>
              <span>•</span>
              <span>{c.category}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
