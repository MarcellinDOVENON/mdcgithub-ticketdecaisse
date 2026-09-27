// C. calcul.js
import { prix } from './donnees.js'; // Il a besoin des prix pour calculer !

export function genererTexteTicket(quantites) {
  let lignes = [];
  let totalHT = 0;

  if (quantites.qCouscousOrdinaire > 0) {
    let total = prix.couscousOrdinaire * quantites.qCouscousOrdinaire;
    lignes.push(`Couscous ordinaire - ${quantites.qCouscousOrdinaire} x ${prix.couscousOrdinaire} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qCouscousMil > 0) {
    let prixApplique = (quantites.qCouscousMil >= 8) ? 350 : prix.couscousMil;
    let total = prixApplique * quantites.qCouscousMil;
    lignes.push(`Couscous de mil - ${quantites.qCouscousMil} x ${prixApplique} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qGariLacte > 0) {
    let total = prix.gariLacte * quantites.qGariLacte;
    lignes.push(`Gari lacté - ${quantites.qGariLacte} x ${prix.gariLacte} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qAmonsoja > 0) {
    let total = prix.amonsoja * quantites.qAmonsoja;
    lignes.push(`Amonsoja - ${quantites.qAmonsoja} x ${prix.amonsoja} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qHuileZomi > 0) {
    let total = prix.huileZomi * quantites.qHuileZomi;
    lignes.push(`Huile zomi - ${quantites.qHuileZomi} x ${prix.huileZomi} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qPoissonDowevi > 0) {
    let total = prix.poissonDowevi * quantites.qPoissonDowevi;
    lignes.push(`Poisson dowêvi - ${quantites.qPoissonDowevi} x ${prix.poissonDowevi} F = ${total} F`);
    totalHT += total;
  }

  if (quantites.qAlcoolSodabi > 0) {
    let total = prix.alcoolSodabi * quantites.qAlcoolSodabi;
    lignes.push(`Alcool sodabi - ${quantites.qAlcoolSodabi} x ${prix.alcoolSodabi} F = ${total} F`);
    totalHT += total;
  }

  let tva = totalHT * 0.18;
  let totalTTC = totalHT + tva;

  // Renvoie le gros bloc de texte formaté
  return "=================================\n" +
         "         TICKET DE CAISSE        \n" +
         "=================================\n" +
         lignes.join("\n") + "\n" +
         "---------------------------------\n" +
         "TOTAL HT : ".padEnd(20) + totalHT + " F\n" +
         "TVA (18%) : ".padEnd(20) + tva + " F\n" +
         "TOTAL TTC : ".padEnd(20) + totalTTC + " F\n" +
         "=================================\n" +
         "Merci pour votre achat";
}
