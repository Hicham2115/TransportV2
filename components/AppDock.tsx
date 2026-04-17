"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Archive,
  BookOpen,
  BusFront,
  HomeIcon,
  House,
  MailIcon,
  PencilIcon,
  PhoneCall,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock, DockIcon } from "@/components/ui/dock"

export type IconProps = React.HTMLAttributes<SVGElement>

const DATA = {
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/OurStory", icon: BookOpen, label: "Our Story" },
    { href: "/Excursions", icon: BusFront, label: "Excursions" },
    { href: "/Fleet", icon: Users, label: "Our Fleet" },
  ],
}

export function AppDock() {
  const router = useRouter()

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 ">
      <TooltipProvider delayDuration={0}>
        <Dock direction="middle" className="h-[60px]  pb-1">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => router.push(item.href)}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12  rounded-full hover:bg-white/10"
                    )}
                  >
                    <item.icon className="size-4 " />
                  </button>
                </TooltipTrigger>
                <TooltipContent className=" border-white/10 bg-[#27272a] text-white">
                  <p className="">{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  )
}
