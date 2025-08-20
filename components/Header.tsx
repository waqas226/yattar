"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import SettingsIcon from "@/components/icons/SettingsIcon";

export type HeaderProps = {
  onPublish?: () => void;
  rightSlot?: React.ReactNode;
};

export default function Header({ onPublish, rightSlot }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 px-6 py-2 w-full border-b bg-white">
      <div className="flex items-center justify-between px-5 w-full">
        {/* Left: brand + URL chip */}
        <div className="flex items-center gap-4 text-sm">
          <Link href="/" className="mr-1 flex items-center gap-3 font-semibold tracking-tight text-gray-900">
            <span className="text-[15px] leading-none">Portfolio Editor</span>
          </Link>
          <span className="hidden text-gray-300 md:inline">|</span>
          <span className="hidden items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-700 md:inline-flex">
            authory.com/WaqasA
            <span className="inline-grid h-5 w-5 place-items-center rounded-full border border-gray-200 bg-white text-gray-500">
              <Image src="/globe.svg" alt="Open" width={12} height={12} />
            </span>
          </span>
        </div>
        {/* Right: action buttons */}
        <div className="flex items-center gap-3">
          {/* Settings: link-style with icon in blue */}
          <button className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600">
            <SettingsIcon size={16} color="currentColor" />
            <span>Settings</span>
          </button>
          {/* Preview: subtle outline */}
          <button className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-[13px] font-medium text-gray-800 transition-colors hover:bg-gray-100">
            Preview
          </button>
          <button
            type="button"
            onClick={onPublish}
            className="rounded-full bg-indigo-600 px-4 py-1.5 text-[13px] font-medium text-white shadow transition-transform hover:bg-indigo-700 hover:shadow-md active:translate-y-[0.5px]"
          >
            Publish
          </button>
          {rightSlot}
        </div>
      </div>
    </header>
  );
}
