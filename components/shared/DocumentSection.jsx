'use client';

import { useState } from 'react';
import { Input } from "../ui/input"
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const DocumentSection = () => {
  const router = useRouter();

  const [password, setPassword] = useState('')
  const pagePassword = 'EvanWay';

  const handleSubmit = (e) => {
    e.preventDefault();

    if(password === pagePassword) {
        router.push('/documents')
    } else {
      alert('Please enter the correct password.')
    }
  }



  return (

    <div id="documents" className="bg-[url('/images/neighborhood.jpg')] bg-cover bg-center bg-fixed bg-stone-800 bg-blend-overlay">
        <div className="py-48">
            <div className="w-full">
                <h2 className="font-playfair text-stone-100 text-4xl md:text-5xl text-center mb-4 font-bold">HOA Documents</h2>
                <div className="underline w-[200px] bg-cyan-600 mx-auto"></div>
                <p className="font-sans text-stone-100 text-center mb-8 mt-4 tracking-wide max-w-sm lg:max-w-lg mx-auto">Enter your password below to access the documents page</p>
            </div>
            <div>
            <form onSubmit={handleSubmit} className="flex justify-center items-center w-3/4 md:w-1/2 lg:w-72 mx-auto">
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="rounded-tr-none rounded-br-none"
                  onChange={(e) => setPassword(e.target.value)}
                  />
                <Button className="bg-cyan-700 rounded-tl-none rounded-bl-none border-l-0 border-cyan-700 hover:bg-cyan-600 hover:border-cyan-600 py-4">
                  Submit
                </Button>
            </form>

            </div>

        </div>

    </div>

  )
}

export default DocumentSection
