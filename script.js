// Onblur -- nom & marque & prix

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
    arr.push(1);
  } else {
    document.getElementById("dateerror").style.visibility = "hidden";
  }
}

function typeBlur() {
  let type = document.getElementById("type").value;

  if (type == "choisis une option") {
    document.getElementById("typeerror").style.visibility = "visible";
    arr.push(1);
  } else {
    document.getElementById("typeerror").style.visibility = "hidden";
  }
}

// Onclick (ajouter) =====================================================================================================

function ajouter() {
  let nomMarqueValidation = /^[aA-zZ ?aA-zZ]{3,30}$/;
  let prixValidation = /^[0-9]+\$?$/;

  let nom = document.getElementById("nom").value;
  let marque = document.getElementById("marque").value;
  let prix = document.getElementById("prix").value;
  let date = document.getElementById("date").value;
  let type = document.getElementById("type").value;

  let arr = [];

  // Nom testing validation ===============================================================================================

  if (nomMarqueValidation.test(nom)) {
    document.getElementById("nomerror").style.visibility = "hidden";
  } else {
    document.getElementById("nomerror").style.visibility = "visible";
    arr.push(1);
  }

  // END ==================================================================================================================

  function validatingForms() {
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
  }

  validatingForms();

  if (arr == 0) {
    // Create table - insert rows & cells

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
    if (non.checked) {
      promotion.innerHTML = document.getElementById("non").value;
    } else if (oui.checked) {
      promotion.innerHTML = document.getElementById("oui").value;
    }
    supprimer.innerHTML = "Supprimer";
    modifier.innerHTML = "Modifier";

    // Empty inputs once "Ajouter" is clicked & Suppression ============================================

    function emptyValues() {
      document.getElementById("nom").value = "";
      document.getElementById("marque").value = "";
      document.getElementById("prix").value = "";
      document.getElementById("date").value = "";
      document.getElementById("type").value = "choisis une option";
      non.checked = false;
      oui.checked = false;
    }

    emptyValues();

    supprimer.onclick = function () {
      row.remove();
    };

    // Modification =============================================

    modifier.onclick = function () {

      document.getElementById("save").style.visibility = "visible";

      document.getElementById("nom").value = nom.innerHTML;
      document.getElementById("marque").value = marque.innerHTML;
      document.getElementById("prix").value = prix.innerHTML;
      document.getElementById("date").value = date.innerHTML;
      document.getElementById("type").value = type.innerHTML;
      if (promotion.innerHTML = 'non') {
        non.checked = true;
      } else if (promotion.innerHTML = 'oui') {
        oui.checked = true;
      }

      document.getElementById("save").onclick = function () {
        
        validatingForms()

        nom.innerHTML = document.getElementById("nom").value;
        marque.innerHTML = document.getElementById("marque").value;
        prix.innerHTML = document.getElementById("prix").value;
        date.innerHTML = document.getElementById("date").value;
        type.innerHTML = document.getElementById("type").value;
        if (non.checked) {
          promotion.innerHTML = document.getElementById("non").value;
        } else if (oui.checked) {
          promotion.innerHTML = document.getElementById("oui").value;
        }

        emptyValues();
        document.getElementById("save").style.visibility = "hidden";
      };
    };
  }
}