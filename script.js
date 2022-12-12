// Onblur -- nom & marque & prix =====================================================================================

function nomBlur() {
  let nom = document.getElementById("nom").value;
  let nomMarqueValidation = /^[aA-zZ ?aA-zZ]{3,30}$/;

  if (nomMarqueValidation.test(nom)) {
    document.getElementById("nomerror").style.visibility = "hidden";
  } else {
    document.getElementById("nomerror").style.visibility = "visible";
  }
}

function marqueBlur() {
  let marque = document.getElementById("marque").value;
  let nomMarqueValidation = /^[aA-zZ ?aA-zZ]{3,30}$/;

  if (nomMarqueValidation.test(marque)) {
    document.getElementById("marqueerror").style.visibility = "hidden";
  } else {
    document.getElementById("marqueerror").style.visibility = "visible";
  }
}

function prixBlur() {
  let prix = document.getElementById("prix").value;
  let prixValidation = /^[0-9]+\$?$/;

  if (prixValidation.test(prix)) {
    document.getElementById("prixerror").style.visibility = "hidden";
  } else {
    document.getElementById("prixerror").style.visibility = "visible";
  }
}

function dateBlur() {
  let date = document.getElementById("date").value;

  if (date == "") {
    document.getElementById("dateerror").style.visibility = "visible";
  } else {
    document.getElementById("dateerror").style.visibility = "hidden";
  }
}

function typeBlur() {
  let type = document.getElementById("type").value;

  if (type == "choisis une option") {
    document.getElementById("typeerror").style.visibility = "visible";
  } else {
    document.getElementById("typeerror").style.visibility = "hidden";
  }
}

// Validation function =====================================================================================

const arr = [];

function validate() {

  arr.length = 0;

  let nomMarqueValidation = /^[aA-zZ ?aA-zZ]{3,30}$/;
  let prixValidation = /^[0-9]+\$?$/;

  let nom = document.getElementById("nom").value;
  let marque = document.getElementById("marque").value;
  let prix = document.getElementById("prix").value;
  let date = document.getElementById("date").value;
  let type = document.getElementById("type").value;


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

  if (date == "") {
    document.getElementById("dateerror").style.visibility = "visible";
    arr.push(1);
  } else {
    document.getElementById("dateerror").style.visibility = "hidden";
  }

  if (type == "choisis une option") {
    document.getElementById("typeerror").style.visibility = "visible";
    arr.push(1);
  } else {
    document.getElementById("typeerror").style.visibility = "hidden";
  }

  if (non.checked || oui.checked) {
    document.getElementById("promotionerror").style.visibility = "hidden";
  } else {
    arr.push(1);
    document.getElementById("promotionerror").style.visibility = "visible";
  }

  if (arr == 0) {
    return true;
  } else {
    return false;
  }
}

// Onclick (ajouter) create table ==========================================================================================

function ajouter() {

  if (validate()) {

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
    promotion.innerHTML = document.querySelector("form").promotion.value;
    modifier.innerHTML = "Modifier";
    supprimer.innerHTML = "Supprimer";

    // we have to sort rows...
    // we have to take the name as an order to start sorting rows

    // row.sort(nom.innerHTML)

    // ============================================================= Local Storage =============================================================

    localStorage.setItem("nomkey", nom.innerHTML);
    localStorage.setItem("marquekey", marque.innerHTML);
    localStorage.setItem("prixkey", prix.innerHTML);
    localStorage.setItem("datekey", date.innerHTML);
    localStorage.setItem("typekey", type.innerHTML);
    localStorage.setItem("promotionkey", promotion.innerHTML);
    localStorage.setItem("supprimerkey", supprimer.innerHTML);
    localStorage.setItem("modifierkey", modifier.innerHTML);

    // for (i = 0; i < localStorage.length; i++) {

    //   localStorage.nomkey[i];
    //   localStorage.marquekey[i];
    //   localStorage.prixkey[i];
    //   localStorage.datekey[i];
    //   localStorage.typekey[i];
    //   localStorage.promotionkey[i];
    //   localStorage.supprimerkey[i];
    //   localStorage.modifierkey[i];
    // }


    // Empty inputs && Sort Alphabetically =============================================================

    // function emptyValues() {
    //   document.getElementById("nom").value = "";
    //   document.getElementById("marque").value = "";
    //   document.getElementById("prix").value = "";
    //   document.getElementById("date").value = "";
    //   document.getElementById("type").value = "choisis une option";
    //   non.checked = false;
    //   oui.checked = false;
    // }
    // emptyValues();

    // function sortAlphabetically() {
    //   row.sort (function(a, b) {
    //     if (a.nom.innerHTML < b.nom.innerHTML) { return -1; }
    //     if (a.nom.innerHTML > b.nom.innerHTML) { return 1; }
    //     return 0;
    // }
    // )
    // }

    // Suppression ========================================================================================

    supprimer.onclick = function () {
      document.getElementById("confirm").style.visibility = "visible";
      document.getElementById('delete').onclick = function () {
        row.remove();
        document.getElementById("confirm").style.visibility = "hidden";
      };
    }


    // Modification =======================================================================================

    modifier.onclick = function () {

      document.getElementById("save").style.visibility = "visible";

      document.getElementById("nom").value = nom.innerHTML;
      document.getElementById("marque").value = marque.innerHTML;
      document.getElementById("prix").value = prix.innerHTML;
      document.getElementById("date").value = date.innerHTML;
      document.getElementById("type").value = type.innerHTML;
      document.querySelector("form").promotion.value = promotion.innerHTML;

      document.getElementById("save").onclick = function () {

        if (validate()) {
          nom.innerHTML = document.getElementById("nom").value;
          marque.innerHTML = document.getElementById("marque").value;
          prix.innerHTML = document.getElementById("prix").value;
          date.innerHTML = document.getElementById("date").value;
          type.innerHTML = document.getElementById("type").value;
          promotion.innerHTML = document.querySelector("form").promotion.value;
          emptyValues();
          document.getElementById("save").style.visibility = "hidden";
        }
      };
    };
  }
}