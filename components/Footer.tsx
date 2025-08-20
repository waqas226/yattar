import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/authory-wordmark.svg"
              alt="Authory"
              width={130}
              height={32}
              priority
            />
            <span className="text-gray-500"> Authory {new Date().getFullYear()}. All rights reserved.</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="/about" className="hover:text-gray-900">About</a>
            <a href="/imprint" className="hover:text-gray-900">Imprint</a>
            <a href="/privacy" className="hover:text-gray-900">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-900">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}