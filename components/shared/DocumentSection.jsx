"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const DocumentSection = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const pagePassword = "EvanWay";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === pagePassword) {
      router.push("/documents");
    } else {
      alert("Please enter the correct password.");
    }
  };

  return (
    <div
      id="documents"
      className="bg-stone-800 bg-[url('/images/neighborhood.jpg')] bg-cover bg-fixed bg-center bg-blend-overlay"
    >
      <div className="py-48">
        <div className="mx-auto w-full px-2">
          <h2 className="mb-4 text-center font-playfair text-4xl font-bold text-stone-100 md:text-5xl">
            HOA Documents
          </h2>
          <div className="mx-auto mb-8 mt-4 flex max-w-sm items-center justify-center gap-2">
            <div className="h-10 w-[3px] bg-cyan-600"></div>
            <p className="mx-auto max-w-sm font-sans tracking-wide text-stone-100 lg:max-w-lg">
              Please sign in to access the HOA documents page
            </p>
          </div>
        </div>
        <div className="px-2">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-full items-center justify-center md:w-1/2 lg:w-72"
          >
            <Input
              type="password"
              placeholder="Enter your password"
              className="rounded-r-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="rounded-l-none border-l-0 border-cyan-700 bg-cyan-700 py-4 hover:border-cyan-600 hover:bg-cyan-600">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DocumentSection;
