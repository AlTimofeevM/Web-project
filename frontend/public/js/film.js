let xhr = new XMLHttpRequest()
let url = window.location.href
let ip = url.slice(url.indexOf('film/') + 5)
xhr.open('GET', '/film=' + ip, true)
  
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    console.log(data)
    if(data.Data.Err){
       document.getElementById('krakra').innerHTML = '<H3>Такого фильма нету<H3>'
    }else{
        let Film =  { Title: data.Data.title, Time : data.Data.runtime, Img: data.Data.poster}
        let buttnon = ''
        if(data.isFilm){
            button = '<center><button type="button" onclick="deleteFilm(value)"  value=\'' + JSON.stringify(Film) + '\' class="btn btn-outline-danger btn-md">Delete</button></center>'
        }else{
            button = '<center><button type="button" onclick="addFilm(value)"  value=\'' + JSON.stringify(Film) + '\' class="btn btn-outline-info btn-md">Add to my list</button></center>'
        }
        document.getElementById('Title').innerHTML = 'Title : ' + data.Data.title
        document.getElementById('Poster').innerHTML = '<img src="' + data.Data.poster + '"/><br/><br/>' + button
        document.getElementById('Year').innerHTML = 'Year : ' + data.Data.year
        document.getElementById('Country').innerHTML = 'Country : ' + data.Data.country
        document.getElementById('Director').innerHTML = 'Director : ' + data.Data.director
        document.getElementById('Writer').innerHTML = 'Writer : ' + data.Data.writer
        document.getElementById('Actors').innerHTML = 'Actors : ' + data.Data.actors
        document.getElementById('Plot').innerHTML = 'Plot : ' + data.Data.plot
        document.getElementById('Awards').innerHTML = 'Awards : ' + data.Data.awards
        document.getElementById('Rating').innerHTML = 'Rating : ' + data.Data.rating
    }
}
xhr.send()
 

function addFilm (Film) {
    $.post('/addFilm', {'Film':Film})
}

function deleteFilm (Film) {
    $.post('/deleteFilm', {'Film':Film})
}