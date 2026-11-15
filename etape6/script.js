"use strict";

// Fonction de l'étape 2
function doInsertRowTable(num, nom, prenom, points) {

    const table = document.getElementsByTagName("table")[0];

    const row = document.createElement("tr");
    row.setAttribute("class", "row");

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    col5.append(input);

    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    row.append(col1);
    row.append(col2);
    row.append(col3);
    row.append(col4);
    row.append(col5);

    table.append(row);
}

// Déclaration du tableau persons
let persons = [
    {nom: "nom-1", prenom: "prenom-1", points: 5},
    {nom: "nom-2", prenom: "prenom-2", points: 10},
    {nom: "nom-3", prenom: "prenom-3", points: 15}
];

// Déclaration du compteur
let lignes = 0;
let total_points = 0;
function init() {

    for (let person of persons) {
        doInsert( person.nom, person.prenom, person.points);
    }

}

function doInsert(nom, prenom, points) {
    lignes++;
    total_points += points;
    let num = lignes;
    doInsertRowTable(num, nom, prenom, points);
    update_summary();
}

function consoleTableau() {
    console.log(persons);
}
// Appel de init()
init();



function update_summary() {
   document.getElementById("p1").innerText = lignes + " ligne(s)";
   document.getElementById("p3").innerText = "Total point(s)= " + total_points;
}

function doNewData() {
  const elt_nom = document.getElementById("form_nom");
  const elt_prenom = document.getElementById("form_prenom");
  const elt_points = document.getElementById("form_points");

  const nom = elt_nom.value;
  const prenom = elt_prenom.value;
  const points = parseInt(elt_points.value);

  
  if (nom=="" || prenom=="" || isNaN(points)) {
    alert("Veuillez remplir tous les champs correctement.");
  }
  else {
    doInsert(nom, prenom, points);
    persons.push({ nom: nom, prenom: prenom, points: points });
    elt_nom.value = "";
    elt_prenom.value = "";
    elt_points.value = "";
  }}


function deleteRow() {

    // Étape 1 : Vérifier si le tableau est vide
    if (lignes == 0) {
        alert("Le tableau est vide !");
        return;
    }

    // Étape 2 : Récupérer le tableau et les checkbox cochées
    const table = document.querySelector("table");

    const checkboxes = table.querySelectorAll(
        ".col_chkbox input"
    );

    // Étape 3 : Vérifier si aucune checkbox n'est cochée
    let selection = false;

    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            selection = true;
            break;
        }
    }

    if (!selection) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    // Étape 4 : Demander une confirmation
    let confirmation = confirm(
        "Voulez-vous vraiment supprimer les lignes sélectionnées ?"
    );

    if (!confirmation) {
        return;
    }

    // Étape 5 : Récupérer toutes les lignes du tableau
    const rows = table.querySelectorAll("tr");

    // Étape 6 : Parcourir les lignes en sens inverse
    for (let i = rows.length - 1; i >= 1; i--) {

        const checkbox = rows[i].querySelector(
            ".col_chkbox input"
        );

        if (checkbox.checked) {
            let points = parseInt(rows[i].cells[3].innerText);
            total_points -= points;
            lignes--;
            rows[i].remove();
            persons.splice(i - 1, 1);
        }
    }

    // Étape 7 : Afficher un message de succès
    alert("Suppression effectuée avec succès !");

    // Actualiser le résumé
    update_summary();
}