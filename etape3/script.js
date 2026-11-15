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

function init() {

    for (let person of persons) {
        doInsert( person.nom, person.prenom, person.points);
    }

}

function doInsert(nom, prenom, points) {
    lignes++;
    let num = lignes;

    doInsertRowTable(num, nom, prenom, points);
}

function consoleTableau() {
    console.log(persons);
}
// Appel de init()
init();
