import { User, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex sticky top-0 left-0 z-20 justify-center items-center py-5 w-screen bg-black">
        <div className="w-[80%] flex gap-12 items-end">
          <h1 className="text-3xl text-blue-500">
            <Link href="/">Karlskov Auto</Link>
          </h1>
          <ul className="hidden gap-5 md:flex">
            <li>
              <Link href="/#aabningstider">åbningstider</Link>
            </li>
            <li>
              <Link href="/#kontakt">kontakt</Link>
            </li>
          </ul>
        </div>
      </header>
      <main className="bg-black">
        <section className="flex relative flex-col items-center pt-7 w-screen h-screen md:pt-0">
          <div className="absolute inset-0 z-0 bg-center bg-cover brightness-30 bg-[url(/images/hero.jpg)]"></div>
          <div className="flex relative z-10 flex-col gap-7 h-full text-center md:justify-center">
            <h2 className="text-5xl text-blue-500">
              Dit nye lokale autoværksted
            </h2>
            <p className="mx-auto w-3/4 text-xl">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              dolorem ipsum quia dolor sit amet
            </p>
          </div>
        </section>
        <section
          className="flex flex-col items-center pt-28"
          id="aabningstider"
        >
          <div className="w-[80%] flex flex-col gap-20">
            <h2 className="text-5xl text-center md:text-start">Åbningstider</h2>
            <div className="flex flex-col gap-4 justify-between md:flex-row">
              <div className="flex flex-col gap-2 items-center">
                <h3 className="text-5xl text-blue-500">16:00-21:00</h3>
                <p className="text-2xl">mandag-torsdag</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h3 className="text-5xl text-blue-500">16:00-19:00</h3>
                <p className="text-2xl">fredag</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h3 className="text-5xl text-blue-500">Efter aftale</h3>
                <p className="text-2xl">lørdag-søndag</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center py-28" id="kontakt">
          <div className="w-[80%] flex flex-col  gap-7">
            <h2 className="text-5xl text-center md:text-start">Kontakt</h2>
            <div className="flex flex-col gap-7 md:flex-row">
              <div className="w-[50%] aspect-square">
                <img
                  src="https://placehold.co/600x400"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-3 text-xl md:gap-7 md:text-3xl">
                <div className="flex gap-2 items-center">
                  <MapPin className="text-blue-500" size={32} />
                  <p>Teknikvej 4, 4532 Gislinge</p>
                </div>

                <div className="flex gap-2 items-center">
                  <Phone className="text-blue-500" size={32} />
                  <p>24491915</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User className="text-blue-500" size={32} />
                  <p>Henrik Karlskov</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
