import React, { useState } from "react";
import Formulaire from "./Formulaire";
import Ticket from "./Ticket";
import { genererTexteTicket } from "./Calcul";

function App() {
  const [ticket, setTicket] = useState("");

  const handleGenererTicket = (quantites: Record<string, number>) => {
    const texte = genererTexteTicket(quantites);
    setTicket(texte);
  };

  const handleImprimer = () => {
    window.print();
  };

  return (
    <div className="m-5 print:m-0 font-sans">
      <header className="text-center mb-5 border-b-2 border-black pb-[10px]">
        <h1 className="m-0 text-2xl font-bold">MDC Boutique</h1>
        <p className="m-0 text-base text-gray-600">Ticket de caisse</p>
      </header>

      <Formulaire onGenererTicket={handleGenererTicket} />
      <Ticket texte={ticket} />
      <button
        id="btnImprimer"
        onClick={handleImprimer}
        className="print:hidden my-[10px] mx-[5px] py-[10px] px-[20px] text-base font-semibold border border-black rounded bg-blue-200 hover:bg-gray-300 cursor-pointer"
      >
        Imprimer le ticket
      </button>

      <footer className="text-center mt-[30px] text-base font-bold text-[#333]">
        Merci pour votre achat
      </footer>
    </div>
  );
}

export default App;