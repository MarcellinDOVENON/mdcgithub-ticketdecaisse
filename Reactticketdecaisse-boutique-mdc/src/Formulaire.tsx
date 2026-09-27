import React, { useState } from "react";

type Props = {
  onGenererTicket: (quantites: Record<string, number>) => void;
};

const Formulaire: React.FC<Props> = ({ onGenererTicket }) => {
  const [quantites, setQuantites] = useState<Record<string, number>>({
    qCouscousOrdinaire: 0,
    qCouscousMil: 0,
    qGariLacte: 0,
    qAmonsoja: 0,
    qHuileZomi: 0,
    qPoissonDowevi: 0,
    qAlcoolSodabi: 0,
  });

  const handleChange = (produit: string, valeur: number) => {
    setQuantites({ ...quantites, [produit]: valeur });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenererTicket(quantites);
  };

  return (
    <form onSubmit={handleSubmit} className="print:hidden">
      <h2 className="text-lg font-semibold mb-2">Formulaire de caisse</h2>
      <table className="w-full border-collapse mb-3.5">
        <thead>
          <tr>
            <th className="border border-black p-2 text-center bg-gray-100">Produit</th>
            <th className="border border-black p-2 text-center bg-gray-100">Prix unitaire</th>
            <th className="border border-black p-2 text-center bg-gray-100">Quantité</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Couscous Ordinaire", "600 F/kg", "qCouscousOrdinaire"],
            ["Couscous de Mil", "450 F/kg (350 si ≥ 8)", "qCouscousMil"],
            ["Gari Lacté", "500 F/kg", "qGariLacte"],
            ["Amon Soja", "375 F/kg", "qAmonsoja"],
            ["Huile Zomi", "975 F/L", "qHuileZomi"],
            ["Poisson Dowêvi", "1200 F/kg", "qPoissonDowevi"],
            ["Alcool Sodabi", "700 F/L", "qAlcoolSodabi"],
          ].map(([nom, prix, key]) => (
            <tr key={key}>
              <td className="border border-black p-2 text-center">{nom}</td>
              <td className="border border-black p-2 text-center">{prix}</td>
              <td className="border border-black p-2 text-center">
                <input
                  type="number"
                  min="0"
                  value={quantites[key as keyof typeof quantites]}
                  onChange={(e) => handleChange(key, Number(e.target.value))}
                  className="w-20 border rounded px-2"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="submit"
        className="my-[10px] mx-[5px] py-[10px] px-[20px] text-base font-semibold border border-black rounded bg-blue-200 hover:bg-gray-300 cursor-pointer"
      >
        Générer le ticket
      </button>
    </form>
  );
};
export default Formulaire;
