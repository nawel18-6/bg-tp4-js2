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

// Déclaration du tableau persons
//  tableau d'objets (+ let) - slides 39-40 et 51
let persons = [
    {nom: "nom-1", prenom: "prenom-1", points: 5},
    {nom: "nom-2", prenom: "prenom-2", points: 10},
    {nom: "nom-3", prenom: "prenom-3", points: 15}
];

//  variables globales déclarées avec let - slides 50-51
let lignes = 0;
let total_points = 0;

//  déclaration d'une fonction - slide 45
function init() {
    //  boucle for...of pour parcourir un tableau - slide 44
    for (let person of persons) {
        //  accès aux propriétés d'un objet (p.nom) - slide 39
        doInsert( person.nom, person.prenom, person.points);
    }

}


//  déclaration d'une fonction avec paramètres - slide 45
function doInsert(nom, prenom, points) {

    //  opérateur d'incrémentation (++) - slide 41
    lignes++;
    //  opérateur combiné (+=) - slide 41
    total_points += points;
    let num = lignes;
    doInsertRowTable(num, nom, prenom, points);
    //  appel d'une fonction - slide 45
    update_summary();
}

//  déclaration d'une fonction - slide 45
function consoleTableau() {
    //  affichage dans la console (console.log) - slide 33
    console.log(persons);
}
// Appel de init()
init();


//  déclaration d'une fonction - slide 45
function update_summary() {
    //  getElementById (slides 61-64) + innerText (slide 91) + concaténation avec + (slide 41)
   document.getElementById("p1").innerText = lignes + " ligne(s)";
   document.getElementById("p3").innerText = "Total point(s)= " + total_points;
}

//  fonction appelée par un événement onclick - slides 45 et 127-133
function doNewData() {
     //  retrouver un élément par son id (getElementById) - slides 61-64
  const elt_nom = document.getElementById("form_nom");
  const elt_prenom = document.getElementById("form_prenom");
  const elt_points = document.getElementById("form_points");
  
   //  lire l'attribut value d'un élément - slide 93
  const nom = elt_nom.value;
  const prenom = elt_prenom.value;
  //  conversion texte -> entier (parseInt) - énoncé du TP, hors slides du cours
  const points = parseInt(elt_points.value);

  //  condition if...else - slide 42 ; opérateurs logiques || et == - slide 41
  if (nom=="" || prenom=="" || isNaN(points)) {
     //  pop-up alert de l'objet window (BOM) - slide 116
    alert("Veuillez remplir tous les champs correctement.");
  }
  else {
     //  appel d'une fonction - slide 45
    doInsert(nom, prenom, points);
    //  ajouter un objet à un tableau (push) - slides 38-40
    persons.push({ nom: nom, prenom: prenom, points: points });
    //  modifier l'attribut value pour vider les champs - slide 93
    elt_nom.value = "";
    elt_prenom.value = "";
    elt_points.value = "";
  }}


//  fonction appelée par un événement onclick - slides 45 et 127-133
function deleteRow() {
  // Étape 1 : Vérifier si le tableau est vide
  //  condition if (slide 42) ; comparaison == (slide 41)
  if (lignes == 0) {
    //  pop-up alert (BOM) - slide 116
    alert("Le tableau est vide !");
    //  return pour sortir de la fonction - slide 45
    return;
  }

  // Étape 2 : Récupérer le tableau et les checkbox
  //  querySelector (retourne le 1er élément du sélecteur CSS) - slides 76-78
  const table = document.querySelector("table");

  //  querySelectorAll (retourne une collection) - slides 76-78
  const checkboxes = table.querySelectorAll(".col_chkbox input");

  // Étape 3 : Vérifier si aucune checkbox n'est cochée
  //  variable let (slide 51)
  let selection = false;

  //  boucle for...of - slide 44
  for (let checkbox of checkboxes) {
    //  propriété checked d'un élément (accès direct à l'attribut) - slide 93
    if (checkbox.checked) {
      selection = true;
      //  break pour interrompre une boucle - slide 44
      break;
    }
  }

  //  opérateur logique NON (!) - slide 41
  if (!selection) {
    alert("Sélectionnez au moins une ligne !");
    return;
  }

  // Étape 4 : Demander une confirmation
  //  pop-up confirm de l'objet window (comme alert) - slide 116
  let confirmation = confirm(
    "Voulez-vous vraiment supprimer les lignes sélectionnées ?",
  );

  if (!confirmation) {
    return;
  }

  // Étape 5 : Récupérer toutes les lignes du tableau
  //  querySelectorAll - slides 76-78
  const rows = table.querySelectorAll("tr");

  // Étape 6 : Parcourir les lignes en sens inverse
  //  boucle for avec décrémentation (i--) - slides 41 et 44
  for (let i = rows.length - 1; i >= 1; i--) {
    //  querySelector sur un élément (cherche dans cette ligne) - slides 76-78
    const checkbox = rows[i].querySelector(".col_chkbox input");

    if (checkbox.checked) {
      //  accès à une cellule (cells[3], cf. children - slide 89) + innerText (slide 91)
      //  parseInt - énoncé du TP, hors slides du cours
      let points = parseInt(rows[i].cells[3].innerText);

      //  opérateur combiné (-=) - slide 41
      total_points -= points;

      //  opérateur de décrémentation (--) - slide 41
      lignes--;

      //  supprimer un élément du DOM (remove) - slide 100
      rows[i].remove();

      //  splice (supprime un élément d'un tableau) - hors slides du cours
      persons.splice(i - 1, 1);
    }
  }

  // Étape 7 : Afficher un message de succès
  alert("Suppression effectuée avec succès !");

  // Actualiser le résumé
  //  appel d'une fonction - slide 45
  update_summary();
}