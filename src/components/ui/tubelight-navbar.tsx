"use client"

import { useState, useEffect } from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

export function NavBar({ items, className }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name)


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            // Check if at bottom of page (highlight last item, usually Contact)
            if (scrollPosition >= documentHeight - 50) {
                setActiveTab(items[items.length - 1].name)
                return
            }

            const currentScrollPos = window.scrollY + 100 // Offset for fixed header

            for (const item of items) {
                const id = item.url.substring(1)
                const element = document.getElementById(id)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (
                        currentScrollPos >= offsetTop &&
                        currentScrollPos < offsetTop + offsetHeight
                    ) {
                        setActiveTab(item.name)
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Check on mount
        return () => window.removeEventListener("scroll", handleScroll)
    }, [items])

    return (
        <div
            className={cn(
                "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none",
                className,
            )}
        >
            <div className="flex items-center justify-between sm:justify-center gap-1 sm:gap-3 bg-white border-2 border-black py-1 px-1 sm:px-2 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] pointer-events-auto w-[90vw] sm:w-auto max-w-full">
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name

                    return (
                        <a
                            key={item.name}
                            href={item.url}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "relative flex-1 sm:flex-none flex items-center justify-center cursor-pointer text-sm font-bold px-2 py-2 sm:px-6 sm:py-2 rounded-full transition-all border-2 border-transparent",
                                "text-textMuted hover:text-black",
                                isActive && "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]",
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden mt-0.5">
                                <Icon size={20} strokeWidth={2.5} />
                            </span>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
