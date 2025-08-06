"use client"
import { signOut, useSession } from "next-auth/react"
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";
import Image from "next/image";
import c from '../../public/c.svg'
import { Button } from "@workspace/ui/components/button";
import { CirclePlus, Plus } from "lucide-react";
import axios from "axios";
const Dashboard = () => {
  const router = useRouter()
  const { data: session, status } = useSession()
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/")
    }
    if (status === "loading") {
      <h1>Loading....</h1>
    }
  }, [])
  const newPageHandler = () => {
    axios.post('http://localhost:3001/document/', {
      "label": "Untitled",
      "userId": "cmdq5vyme00002mx8wn15bx2l"
    })
      .then(function (response) {
        console.log(response);
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="flex flex-col w-full h-full">
      {
        session && <div className="flex flex-col justify-center items-center w-full mt-50 lg:mt-30">
          <Image src={c} alt="book" className="sm:w-[300px] w-[200px] m-10" />
          <h1>Welcome to {session.user?.name?.split(" ")[0]}'s Desk</h1>
          <Button className="mt-2" onClick={newPageHandler}><CirclePlus /> Create Slate</Button>
        </div>
      }


    </div>
  )
}

export default Dashboard