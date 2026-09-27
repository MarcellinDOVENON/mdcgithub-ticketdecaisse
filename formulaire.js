// B. formulaire.js (Extraction exclusive des données du DOM)

export function obtenirQuantitesSaisies() {
  return {
    qCouscousOrdinaire: parseInt(document.getElementById("qCouscousOrdinaire").value, 10) || 0,
    qCouscousMil: parseInt(document.getElementById("qCouscousMil").value, 10) || 0,
    qGariLacte: parseInt(document.getElementById("qGariLacte").value, 10) || 0,
    qAmonsoja: parseInt(document.getElementById("qAmonsoja").value, 10) || 0,
    qHuileZomi: parseInt(document.getElementById("qHuileZomi").value, 10) || 0,
    qPoissonDowevi: parseInt(document.getElementById("qPoissonDowevi").value, 10) || 0,
    qAlcoolSodabi: parseInt(document.getElementById("qAlcoolSodabi").value, 10) || 0
  };
}
