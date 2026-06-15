"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function ForceDark() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (theme !== "dark") {
      setTheme("dark")
    }
  }, [theme, setTheme])

  useEffect(() => {
    const forceDark = () => {
      const html = document.documentElement
      if (!html.classList.contains("dark")) {
        html.classList.add("dark")
      }
      if (html.classList.contains("light")) {
        html.classList.remove("light")
      }
      if (html.style.colorScheme !== "dark") {
        html.style.colorScheme = "dark"
      }
    }

    forceDark()

    const observer = new MutationObserver(forceDark)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
