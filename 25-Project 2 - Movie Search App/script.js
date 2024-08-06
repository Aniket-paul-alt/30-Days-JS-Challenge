// https://www.omdbapi.com/?s=dark&apikey=8dea0f06

const btn = document.querySelector('#search-button')
const input = document.querySelector('#search-input')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let movie = input.value
    console.log(movie);
    const URL = `https://www.omdbapi.com/?t=${movie}&apikey=8dea0f06`

    async function searchMovies(){
        try {
            const res = await fetch(URL)
            let data = await res.json()
            console.log(data);
            console.log(data.Error);

            let moviesArray = data.Search
            // console.log(moviesArray);
            
            const searchResponse = document.querySelector("#search-response")
            searchResponse.innerHTML = `Searching for "${movie}"`

            const resultCont = document.querySelector("#results-container")
            resultCont.innerHTML=``

            if(data.Error){
                const div = document.createElement('div')
                div.setAttribute('class','movie-card')
                div.innerHTML=`
                <h2>${data.Error}</h2>
                `
                resultCont.appendChild(div)
                return
            }

            
            const div = document.createElement('div')
            div.setAttribute('class','movie-card')
            div.innerHTML=`
            <img src="${data.Poster}" alt="Movie Poster" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${data.Title}</h3>
                <p class="release-year">Release Year: ${data.Year}</p>
                <button id='more-info'>more info</button>
            </div>
            `
            resultCont.appendChild(div)

            const infoBtn = document.querySelector('#more-info')
            infoBtn.addEventListener('click',(e)=>{
                e.preventDefault()
                
                    console.log("hiiii");
                    div.innerHTML=`
                        <img src="${data.Poster}" alt="Movie Poster" class="movie-poster">
                        <div class="movie-info">
                            <h3 class="movie-title">${data.Title}</h3>
                            <p class="release-year">Release Year: ${data.Year}</p>
                            <p class="release-year">Director: ${data.Director}</p>
                            <p class="release-year">Actors: ${data.Actors}</p>
                            <p class="release-year">Plot: ${data.Plot}</p>
                            <button id='less-info'>less info</button>
                        </div>
                    `  
                        const lessInfo = document.querySelector("#less-info")
                        lessInfo.addEventListener('click',(e)=>{
                            e.preventDefault()
                            console.log("helooooo");
                            
                            div.innerHTML=`
                            <img src="${data.Poster}" alt="Movie Poster" class="movie-poster">
                            <div class="movie-info">
                            <h3 class="movie-title">${data.Title}</h3>
                            <p class="release-year">Release Year: ${data.Year}</p>
                            <button id='more-info'>more info</button>
                            </div>
                        `
                        }) 
                
            })

            
        } catch (error) {
            console.error(error);
        }
    }

    searchMovies()
})