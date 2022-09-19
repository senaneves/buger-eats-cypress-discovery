//API
var avengers = ['Tony Stark', 'Clint Barthon', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Scoth Lang']



/*         function listaVingadores(){
    avengers.forEach(function(a){
        console.log(a)
    })
} */

function listaVingadores() {
    var ul = document.getElementById('avengersList')
    ul.innerHTML = ''
    avengers.forEach(function (a) {
        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)

    })


}