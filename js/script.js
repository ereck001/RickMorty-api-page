fetch('https://rickandmortyapi.com/api/character',{
    method:'GET'
})
.then(response => response.json())
.then(function(json){

    let container = document.querySelector('.container')

    json.results.map(function(results){
        container.innerHTML+=`
        <div class = 'card'>
            <img class = 'avatar' src = '${results.image}'/>
            <span class = 'info'>
            <p>${results.name}</p>
            <p>origem: ${results.origin.name}</p>
            <p>especie: ${results.species}</p>
            <p>gênero: ${results.gender}</p>
            <p>status: ${results.status == 'Alive'?'vivo':'morto'}</p>
            </span>
        </div>
        `
    })

})