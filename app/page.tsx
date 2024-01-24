import Header from "@/app/components/header/Header"
import WhatCards from "./components/what-cards/WhatCards";
import Quote from "./components/Quote";

export default function Home() {
  const ok = "Some String"
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <WhatCards />
      <Quote quoteText={"Po optymalizacji wizytówki w Mapach Google, zainteresowanie klientów moimi usługami przerosło moje oczekiwania. Polecam usługi Pana Darka!"} />
    </main>
  );
}
