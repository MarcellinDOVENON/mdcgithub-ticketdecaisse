import { prix } from "./Donnees";

export function genererTexteTicket(quantites: Record<string, number>): string {
  let lignes: string[] = [];
  let totalHT = 0;

  if (quantites.qCouscousOrdinaire > 0) {
    const total = prix.qCouscousOrdinaire * quantites.qCouscousOrdinaire;
    lignes.push(`Couscous ordinaire - ${quantites.qCouscousOrdinaire} x ${prix.qCouscousOrdinaire} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qCouscousMil > 0) {
    const prixApplique = quantites.qCouscousMil >= 8 ? 350 : prix.qCouscousMil;
    const total = prixApplique * quantites.qCouscousMil;
    lignes.push(`Couscous de mil - ${quantites.qCouscousMil} x ${prixApplique} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qGariLacte > 0) {
    const total = prix.qGariLacte * quantites.qGariLacte;
    lignes.push(`Gari lacté - ${quantites.qGariLacte} x ${prix.qGariLacte} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qAmonsoja > 0) {
    const total = prix.qAmonsoja * quantites.qAmonsoja;
    lignes.push(`Amon soja - ${quantites.qAmonsoja} x ${prix.qAmonsoja} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qHuileZomi > 0) {
    const total = prix.qHuileZomi * quantites.qHuileZomi;
    lignes.push(`Huile zomi - ${quantites.qHuileZomi} x ${prix.qHuileZomi} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qPoissonDowevi > 0) {
    const total = prix.qPoissonDowevi * quantites.qPoissonDowevi;
    lignes.push(`Poisson dowêvi - ${quantites.qPoissonDowevi} x ${prix.qPoissonDowevi} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qAlcoolSodabi > 0) {
    const total = prix.qAlcoolSodabi * quantites.qAlcoolSodabi;
    lignes.push(`Alcool sodabi - ${quantites.qAlcoolSodabi} x ${prix.qAlcoolSodabi} F = ${total} F`);
    totalHT += total;
  }

  const tva = totalHT * 0.18;
  const totalTTC = totalHT + tva;

  return (
    "=================================\n" +
    "         TICKET DE CAISSE        \n" +
    "=================================\n" +
    lignes.join("\n") + "\n" +
    "---------------------------------\n" +
    `TOTAL HT : ${totalHT} F\n` +
    `TVA (18%) : ${tva.toFixed(0)} F\n` +
    `TOTAL TTC : ${totalTTC.toFixed(0)} F\n` +
    "=================================\n" +
    "Merci pour votre achat"
  );
}