var tous_les_inputs = document.querySelectorAll('input[type="text"]');

for(var index=0; index<tous_les_inputs.length;index++){

	tous_les_inputs[index].addEventListener('keyup',CalculTVA)
}

function CalculTVA() {
	var montantHT = document.querySelector('#montantHT').value;
	var tauxTVA = document.querySelector('#tauxTVA').value;

	var montantTVA = document.querySelector('#montantTVA').value;

	montantTVA = Math.round((montantHT*tauxTVA)/100);

	document.querySelector('#montantTVA').value= montantTVA;

	montantHT = parseInt(montantHT);

	document.querySelector('#montantTTC').value= montantHT+montantTVA;
}
////// MISE A JOUR TVA

var liste_tva = document.querySelectorAll('input[type="button"]');

for(var index =0; index<liste_tva.length;index++){
	liste_tva[index].addEventListener('click', function () {

		console.log(this.value)

		document.querySelector('#tauxTVA').value = parseFloat(this.value);

		CalculTVA();
	})
}