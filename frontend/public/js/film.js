let xhr = new XMLHttpRequest()
let url = window.location.href
let ip = url.slice(url.indexOf('film/') + 5)
xhr.open('GET', '/film=' + ip, true)
  
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    if(data.Err){
       document.getElementById('krakra').innerHTML = '<H3>Такого фильма нету<H3>'
    }else{
        document.getElementById('Title').innerHTML = data.title
        document.getElementById('Poster').innerHTML = '<img src="' + data.poster + '"/>'
        document.getElementById('Year').innerHTML = data.year
        document.getElementById('Country').innerHTML = data.country
        document.getElementById('Director').innerHTML = data.director
        document.getElementById('Writer').innerHTML = data.writer
        document.getElementById('Actors').innerHTML = data.actors
        document.getElementById('Plot').innerHTML = data.plot
        document.getElementById('Awards').innerHTML = data.awards
        document.getElementById('Rating').innerHTML = data.rating
    }
}
xhr.send()
 