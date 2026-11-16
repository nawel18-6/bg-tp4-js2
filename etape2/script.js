"use strict";//  mode strict - slide 51


//  déclaration d'une fonction avec paramètres - slide 45
// Fonction de l'étape 2
function doInsertRowTable(num, nom, prenom, points) {

     
    // Récupérer l'élément tableau 
    //  retrouver un élément par son id (getElementById) - slides 61-64
    const table = document.getElementById("table");

    // Créer un élément de type tr (ligne de tableau)
    //  créer un élément HTML (createElement) - slide 104
    const row = document.createElement("tr");

   
     // Affecter la classe "row" avec setAttribute (slides 106-107)
    row.setAttribute("class", "row");

    // Créer 5 éléments de type td (cellules de tableau) (td) - slide 104 ; const - slide 51
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplissage du contenu texte d'un élément (innerText) - slide 91
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // La dernière colonne contient un input de type checkbox
    //  créer un élément HTML (createElement) - slide 104 ; const - slide 51
    const input = document.createElement("input");
    //  modifier un attribut (setAttribute) - slide 107
    input.setAttribute("type", "checkbox");
    //  ajouter un élément enfant (appendChild) - slide 103
    col5.append(input);

    //  modifier un attribut (setAttribute) - slide 107
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne row
    //  ajouter un élément enfant (appendChild) - slide 103
    row.append(col1);
    row.append(col2);
    row.append(col3);
    row.append(col4);
    row.append(col5);

    // Ajouter la ligne row au tableau table
    //  ajouter un élément enfant (appendChild) - slide 103
    table.append(row);
}