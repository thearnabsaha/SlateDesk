"use client"
import { Button } from "@workspace/ui/components/button"
import a from '../public/a.svg'
import b from '../public/b.svg'
import Image from "next/image"

import React from 'react'
import { ModeToggle } from "@/components/ModeToggle"
import { useScrollTop } from "@/components/use-scroll-top"
import { cn } from "@workspace/ui/lib/utils"
import { signIn } from "next-auth/react"

const page = () => {
  const scrolled = useScrollTop()
  return (
    <div className="flex flex-col min-h-screen">
      <div className={cn("flex justify-between items-center px-6 py-4 z-50 fixed w-full top-0 bg-background flex-1", scrolled && " border-b shadow-sm shadow-ring")}>
        <h1 className="text-3xl">SlateDesk</h1>
        <div className="flex space-x-2">
          <Button className="cursor-pointer" onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>Login</Button>
          <ModeToggle />
        </div>
      </div>
      <div className="flex flex-col pt-30 items-center flex-1">
        <h1 className=" md:text-4xl w-full md:w-[500px] text-center px-5 text-2xl">Your Ideas, Documents, & Plans. Unified. Welcome to <span className=" underline">SlateDesk</span> </h1>
        <p className=" text-center w-full md:w-[400px] mt-10 px-5">Capture notes, plan projects, and build your second brain—all in one clean, customizable space.</p>
        <div className="flex mt-10 md:mt-0 h-[500px]">
          <Image src={a} alt="book" className="w-[300px] md:m-30" />
          <Image src={b} alt="book" className="w-[300px] m-30 lg:block hidden" />
        </div>
      </div>
      <footer className="flex justify-between px-5 relative w-full mb-2 bottom-0 ">
        <p className="text-lg font-black">SlateDesk</p>
        <div className="text-muted-foreground flex space-x-5 flex-col sm:flex-row">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </footer>
    </div>
  )
}

export default page