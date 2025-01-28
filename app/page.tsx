"use client";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        Weather Details
      </div>

      <footer className="py-4 flex justify-center pb-8">Footer</footer>
    </main>
  );
}
