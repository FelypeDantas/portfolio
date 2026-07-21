"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const META_PIXEL_ID = "1027487592995871";

export default function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}