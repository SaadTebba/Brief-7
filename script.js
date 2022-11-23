function ajouter() {

    let table = document.getElementById('table');
    let row = table.insertRow();

    let nom = row.insertCell();
    let marque = row.insertCell();
    let prix = row.insertCell();
    let date = row.insertCell();
    let type = row.insertCell();
    let non = row.insertCell();

    nom.innerHTML = document.getElementById('nom').value;
    marque.innerHTML = document.getElementById('marque').value;
    prix.innerHTML = document.getElementById('prix').value;
    date.innerHTML = document.getElementById('date').value;
    type.innerHTML = document.getElementById('type').value;
    non.innerHTML = document.getElementById('oui').value;
    non.innerHTML = document.getElementById('non').value;

}