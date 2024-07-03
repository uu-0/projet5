export default function printNumbers(n) {
    let result = ''; //initialisation chaîne de caractères vide

    //boucle for pour itérer de 1 à n
    for (let i = 1; i <= n; i++) {
        //ajt chaque nombre à la chaîne de caractères avec un espace
        result += i + ' ';
    }

    //(retirer l'espace final avec trim)
    return result.trim();
}
