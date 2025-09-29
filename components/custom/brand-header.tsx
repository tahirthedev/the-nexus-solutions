"use client"

import { cn } from "@/lib/utils"

export function BrandHeader({ className }: { className?: string }) {
  return (
    <header className={cn("w-full border-b border-border bg-card", className)}>
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div aria-hidden className="h-7 w-7 rounded-md bg-primary/20 ring-1 ring-primary/50 grid place-items-center">
            <span className="block h-3 w-3 rounded-sm bg-primary" />
          </div>
          <span className="font-semibold tracking-tight">The Nexus Digitals</span>
        </div>
        <div className="text-xs text-muted-foreground">Website Brief Form</div>
      </div>
    </header>
  )
}
