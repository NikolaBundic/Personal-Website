'use client'

import * as React from 'react'
import Link from 'next/link'
import { ModeToggle } from '../mode-toggle'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { inspiration } from '../ui/fonts'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { DialogTitle } from '@radix-ui/react-dialog'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { name: 'About', href: '#section1' },
    { name: 'Technologies', href: '#section2' },
    { name: 'Projects', href: '#section3' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <p className={`${inspiration.className} text-4xl font-bold text-primary`}>
              NB
            </p>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Button key={item.name} variant="ghost" asChild>
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <DialogTitle>Menu</DialogTitle>
                <div className="mt-6 flow-root">
                  <div className="space-y-2 py-6">
                    {navItems.map((item) => (
                      <Button
                        key={item.name}
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link href={item.href} onClick={() => setIsOpen(false)}>
                          {item.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <ModeToggle />
        </div>
      </div>
      <hr />
    </nav>
  )
}