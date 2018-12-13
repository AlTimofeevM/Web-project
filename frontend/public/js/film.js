let xhr = new XMLHttpRequest()
let url = window.location.href
let ip = url.slice(url.indexOf('film/') + 5)
xhr.open('GET', '/film=' + ip, true)
  
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    if(data.Err){
       document.getElementById('krakra').innerHTML = '<H3>Такого фильма нету<H3>'
    }else{
        let Film =  { Title: data.title, Time : data.runtime, Img: data.poster}
        document.getElementById('Title').innerHTML = 'Title : ' + data.title
        document.getElementById('Poster').innerHTML = '<img src="' + data.poster + '"/><br/><br/><center><button type="button" onclick="add(value)"  value=\'' + JSON.stringify(Film) + '\' class="btn btn-outline-info btn-md">Add to my list</button></center>'
        document.getElementById('Year').innerHTML = 'Year : ' + data.year
        document.getElementById('Country').innerHTML = 'Country : ' + data.country
        document.getElementById('Director').innerHTML = 'Director : ' + data.director
        document.getElementById('Writer').innerHTML = 'Writer : ' + data.writer
        document.getElementById('Actors').innerHTML = 'Actors : ' + data.actors
        document.getElementById('Plot').innerHTML = 'Plot : ' + data.plot
        document.getElementById('Awards').innerHTML = 'Awards : ' + data.awards
        document.getElementById('Rating').innerHTML = 'Rating : ' + data.rating
    }
}
xhr.send()
 

function add (Film) {
    $.post('/addFilm', {'Film':Film})
}