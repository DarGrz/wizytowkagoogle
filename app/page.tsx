import Header from "@/app/components/header/Header"
import Reviews from "./components/reviews/index"
import WhatCards from "./components/what-cards/WhatCards";
import Quote from "./components/Quote";

export default function Home() {
  const ok = "Some String"
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Reviews />
      <WhatCards />
      <Quote quoteText={"Po skorzystaniu z oferty prowadzenia wizytówki w Mapach Google, zainteresowanie klientów moimi usługami przerosło moje oczekiwania. Gorąco Polecam!"} />
    </main>
  );
}
