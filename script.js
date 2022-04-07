function nbrRandom() {
    //reinitialisation de la div et des variables
    document.getElementById("numberz").innerHTML = "";
    document.getElementById("alert").innerHTML = "";

    //recupération des valeurs
    var nbrMax = parseInt(document.getElementById('nbrMax').value);
    var nbrMin = parseInt(document.getElementById('nbrMin').value);
    var nbrDraw = parseInt(document.getElementById('nbrDraw').value);


    if (nbrMin >= nbrMax) {
        document.getElementById("alert").innerHTML = "le nombre minimum doit être inférieur au nombre maximum";

    }
    else {
        //randomization des valeurs
        function getRandomvalue(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const randomNumbers = []
        for (let i = 0; i < nbrDraw; i++) {
            let randomValue = getRandomvalue(nbrMin, nbrMax)
            randomNumbers.push(randomValue);
        }

        const container = document.getElementById("numberz")
        for (let i = 0; i < randomNumbers.length; i += 20) { // ici on va parcourir le tableau de 20 en 20
            const p = document.createElement('tr'); // on crée une balise p pour y mettre nos nombres, ce sera notre ligne

            for (let number of randomNumbers.slice(i, i + 20)) { // on prend une tranche de 20 éléments du tableau à partir de l’élément i jusqu’à l’élément juste avant i+21
                const span = document.createElement('td'); //on crée une span pour mettre notre nombre, plus pratique pour mettre du style
                span.textContent = number; // on met le nombre dans la span
                p.appendChild(span);  // on met la span dans le p
            }
            container.appendChild(p); // on met le p dans le conteneur destiné à le recevoir
        }
    }

}

function pileFace() {
    let resultPFValue = Math.round(Math.random())

    switch (resultPFValue) {
        case 0:
            var resultPF = "Pile"
            document.getElementById('piece').innerHTML = '<img src="./images/pile.png" alt="Piece pile" height="200" width="200" />';

            break;
        case 1:
            var resultPF = "Face"
            document.getElementById('piece').innerHTML = '<img src="./images/face.png" alt="Piece pile" height="200" width="200" />';

            break;

        default:
            var resultPF = "Non défini"
            break;
    }
    document.getElementById("PileFace").innerHTML = resultPF;
} 

let numbers = [1, 28, 30, 14, 10, 5, 2];

function findLargestNumber(nombres){
nombres.sort(function(a, b){
    return a - b;
});
console.log(nombres.pop());
}


findLargestNumber(numbers);
