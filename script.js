function ajouter() {

  let nomMarqueValidation = /^[aA-zZ ?aA-zZ]{3,30}$/;
  let prixValidation = /^[0-9]+\$?$/;

  let nom = document.getElementById("nom").value;
  let marque = document.getElementById("marque").value;
  let prix = document.getElementById("prix").value;
  let date = document.getElementById("date").value;
  let type = document.getElementById("type").value;

  let arr = [];

  if (nomMarqueValidation.test(nom)) {
    document.getElementById("nomerror").style.visibility = "hidden";
  } else {
    document.getElementById("nomerror").style.visibility = "visible";
    arr.push(1);
  }

  if (nomMarqueValidation.test(marque)) {
    document.getElementById("marqueerror").style.visibility = "hidden";
  } else {
    document.getElementById("marqueerror").style.visibility = "visible";
    arr.push(1);
  }

  if (prixValidation.test(prix)) {
    document.getElementById("prixerror").style.visibility = "hidden";
  } else {
    document.getElementById("prixerror").style.visibility = "visible";
    arr.push(1);
  }

  if (arr == 0) {

    let table = document.getElementById("table");
    let row = table.insertRow();

    let nom = row.insertCell();
    let marque = row.insertCell();
    let prix = row.insertCell();
    let date = row.insertCell();
    let type = row.insertCell();
    let promotion = row.insertCell();
    let modifier = row.insertCell();
    let supprimer = row.insertCell();

    nom.innerHTML = document.getElementById("nom").value;
    marque.innerHTML = document.getElementById("marque").value;
    prix.innerHTML = document.getElementById("prix").value;
    date.innerHTML = document.getElementById("date").value;
    type.innerHTML = document.getElementById("type").value;
    promotion.innerHTML = document.getElementById("non").value;

    modifier.innerHTML = "Modifer";
    modifier.onclick = function() {
      console.log('Modifier clicked')
    }
    supprimer.innerHTML = "Supprimer";
    supprimer.onclick = function() {
      row.remove()
    }

  }
}




// window.scrollBy(100, 0);