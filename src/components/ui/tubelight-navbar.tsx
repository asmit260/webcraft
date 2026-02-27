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
            <div className="flex items-center gap-3 bg-white border-2 border-black py-1 px-1 rounded-full shadow-sketch pointer-events-auto">
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name

                    return (
                        <a
                            key={item.name}
                            href={item.url}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors border-2 border-transparent",
                                "text-textMuted hover:text-black",
                                isActive && "bg-black text-white border-black",
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={18} strokeWidth={2.5} />
                            </span>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
