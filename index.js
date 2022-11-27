const cats = ["Milo", "Otis", "Garfield"];



function destructivelyAppendCat(name){
    cats.push('Ralph');
}
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


function destructivelyRemoveLastCat(){
    cats.pop();
}
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let copyOfCat = [...cats, "Broom"]
    return copyOfCat
}


function prependCat(name){
    let prepEnd = ["Arnold", ...cats]
    return prepEnd
}


function removeLastCat(){
    let removeLast = cats.slice(0,2)
    return removeLast

}
function removeFirstCat(){
    let removeFirst = cats.slice(1)
    return removeFirst

}
