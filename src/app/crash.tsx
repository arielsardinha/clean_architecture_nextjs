"use client";
import { useEffect } from "react";

export function CrashPage() {
  useEffect(() => {
    window.onerror = (message, source, lineno, colno, error) => {
      console.log(`erro identificado - ${message} - ${error}`);
    };
  }, []);

  return null;
}
