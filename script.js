
document.getElementById('calculate-button').addEventListener('click', function() {
    let basePrice = 100;

  
    let education = parseFloat(document.getElementById('education').value);

 
    let netWorth = parseFloat(document.getElementById('net-worth').value);


    let caste = parseFloat(document.getElementById('caste').value);


    let skillMusic = document.getElementById('skill-music').checked ? parseFloat(document.getElementById('skill-music').value) : 0;
    let skillCook = document.getElementById('skill-cook').checked ? parseFloat(document.getElementById('skill-cook').value) : 0;
    let skillCharacter = document.getElementById('skill-character').checked ? parseFloat(document.getElementById('skill-character').value) : 0;
    let skillSings = document.getElementById('skill-sings').checked ? parseFloat(document.getElementById('skill-sings').value) : 0;


    let ageElements = document.getElementsByName('age');
    let age = 1;
    for (let i = 0; i < ageElements.length; i++) {
        if (ageElements[i].checked) {
            age = parseFloat(ageElements[i].value);
            break;
        }
    }

  
    let repParents = document.getElementById('rep-parents').checked ? parseFloat(document.getElementById('rep-parents').value) : 1;
    let repCharacter = document.getElementById('rep-character').checked ? parseFloat(document.getElementById('rep-character').value) : 1;
    let repGeneral = document.getElementById('rep-general').checked ? parseFloat(document.getElementById('rep-general').value) : 0;

 
    let finalPrice = basePrice;
    finalPrice *= education; 
    finalPrice *= netWorth;
    finalPrice += caste; 

  
    finalPrice += skillMusic;
    finalPrice += skillCook;
    finalPrice += skillCharacter;
    finalPrice += skillSings;

  
    finalPrice *= age;

   
    finalPrice *= repParents;
    finalPrice *= repCharacter;
    finalPrice += repGeneral;


    document.getElementById('dowry-price').textContent = `${finalPrice.toFixed(2)}$`;
});
