let xhr = new XMLHttpRequest()
xhr.open('GET', '/userinfo', true)
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    document.getElementById('Username').innerHTML = data.Username
    document.getElementById('UserImg').innerHTML ='<img src="' + data.Img+ ' "/>'
    document.getElementById('Time').innerHTML = data.Time
}

xhr.send()