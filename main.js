// main.js
import { obtenirQuantitesSaisies } from './formulaire.js';
import { genererTexteTicket } from './calcul.js';

// Gestion de la génération du ticket
document.getElementById("formCaisse").addEventListener("submit", function(e) {
  e.preventDefault(); 

  // 1. On récupère les quantités via le module formulaire
  const quantites = obtenirQuantitesSaisies();

  // 2. On génère le texte via le module calcul
  const ticketFinal = genererTexteTicket(quantites);

  // 3. On affiche le résultat
  document.getElementById("ticket").textContent = ticketFinal;
});

// Gestion de l'impression
document.getElementById("btnImprimer").addEventListener("click", function() {
  window.print();
});
