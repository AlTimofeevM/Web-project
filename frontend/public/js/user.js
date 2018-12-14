let xhr = new XMLHttpRequest()
xhr.open('GET', '/userinfo', true)
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    let min = data.Time % 60
    let hour = Math.floor(data.Time/60)
    let day = Math.floor(hour/24)
    document.getElementById('Username').innerHTML = data.Username
    document.getElementById('UserImg').innerHTML ='<img src="' + data.Img+ ' "  width="200" height="200" />'
    document.getElementById('Time').innerHTML = day + ' d ' + hour + ' h ' + min + ' m '
    let films = ''
    for(film of data.Films.reverse()){
        films += '<tr><td>' + '<a href= film/' + film.Title.replace(' ', '_') + ' >' + film.Title + '</a>' 
        films += '</td><td><img src="' + film.Img + ' "  width="100" height="155" /></td></tr>'
    }
    document.getElementById('Films').innerHTML = films
}

xhr.send()