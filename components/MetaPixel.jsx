"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.fbq === "function"
    ) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
