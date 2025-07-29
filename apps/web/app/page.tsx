"use client"
import { Button } from "@workspace/ui/components/button"
import a from '../public/a.svg'
import b from '../public/b.svg'
import Image from "next/image"

import React from 'react'
import { ModeToggle } from "@/components/ModeToggle"
import { useScrollTop } from "@/components/use-scroll-top"
import { cn } from "@workspace/ui/lib/utils"

const page = () => {
  const scrolled= useScrollTop()
  return (
    <div>
      <div className={cn("flex justify-between items-center px-10 py-2 z-50 fixed w-full top-0 bg-background",scrolled&&" border-b shadow-sm shadow-ring")}>
        <h1>SlateDesk</h1>
        <div className="flex space-x-2">
          <Button>Login</Button>
          <ModeToggle/>
        </div>
      </div>
      <div className="flex flex-col pt-30 items-center">
        <h1 className=" text-4xl w-full md:w-[500px] text-center px-5">Your Ideas, Documents, & Plans. Unified. Welcome to <span className=" underline">SlateDesk</span> </h1>
        <p className=" text-center w-full md:w-[400px] mt-10 px-5">Capture notes, plan projects, and build your second brain—all in one clean, customizable space.</p>
        <div className="flex mt-10 md:mt-0 h-[500px]">
          <Image src={a} alt="book" className="w-[300px] md:m-30"/>
          <Image src={b} alt="book" className="w-[300px] m-30 lg:block hidden"/>
        </div>
      </div>
      <footer className="flex justify-between px-5 relative bottom-0 ">
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