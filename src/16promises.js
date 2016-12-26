let movieList = document.getElementById("movies");

function addMoviesToList(movies) {
    movies.Search.forEach((movie) => {
        let img = document.createElement("img");
        img.src = movie.Poster;
        movieList.appendChild(img);
    });
}

function getData(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if(xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                console.log(json);
                resolve(json);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function(error) {
            reject(error);
        };

        xhr.send();
    });
}

let search = "harry potter";

/*
getData(`http://www.omdbapi.com/?s=${search}`)
    .then(addMoviesToList)
    .catch((e) => { console.warn("Something went wrong."); });
*/


function go(num) {
    return new Promise(function(resolve, reject) {
        let delay = Math.ceil(Math.random() * 3000);
        console.log(num, delay);
        setTimeout(() => {
            if(delay > 2000)
                reject(num);
            else
                resolve(num);
        }, delay);
    })
}

let p1 = go(1);
let p2 = go(2);
let p3 = go(3);

Promise.race([p1, p2, p3])
    .then(value => console.log(value))
    .catch(error => console.warn(error));


