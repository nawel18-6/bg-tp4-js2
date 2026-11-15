function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer l'élément tableau
    const table = document.getElementById("table");

    // Créer un élément de type tr (ligne de tableau)
    const row = document.createElement("tr");

    // Affecter la classe "row"
    row.setAttribute("class", "row");

    // Créer 5 éléments de type td (cellules de tableau)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplissage du contenu
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // La dernière colonne contient un input de type checkbox
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");

    col5.append(input);

    // Affectation des classes
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne row
    row.append(col1);
    row.append(col2);
    row.append(col3);
    row.append(col4);
    row.append(col5);

    // Ajouter la ligne row au tableau table
    table.append(row);
}