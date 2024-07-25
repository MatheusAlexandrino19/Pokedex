
var PokemonImg = document.getElementById('pokemon-img');
var PokemonName = document.getElementById('Pokemon-Name');
var PokemonId = document.getElementById('Pokemon-Id');
var PokemonType1 = document.getElementById('Type1');
var PokemonType2 = document.getElementById('Type2');
var PokemonForm = document.getElementById('PokemonForm');
var PrevBtn = document.getElementById('prev-btn');
var Nextbtn = document.getElementById('next-btn');
var PokemonInput = document.getElementById('Pokemon_input_search');
let SearchPokemon = 1;


const fetchpokemon =  async (pokemon) =>{
   const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
   if (APIResponse.status == 200){
    const data = await APIResponse.json();
   return data
   }
   
}

function Colortext(){
    switch(PokemonType1.innerText){
        case 'Poison':
            PokemonType1.style.color = '#A33EA1';
        break;
        case 'Ice':
            PokemonType1.style.color = ' #96D9D6';
        break;
        case 'Fire':
            PokemonType1.style.color = ' #EE8130';
        break;
        case 'Water':
            PokemonType1.style.color = '#6390F0';
        break;
        case 'Dragon':
            PokemonType1.style.color = '#6F35FC';
        break;
        case 'Flying':
            PokemonType1.style.color = '#A98FF3';
        break;
        case 'Electric':
            PokemonType1.style.color = ' #F7D02C';
        break;
        case 'Ghost':
            PokemonType1.style.color = '#735797';
        break;
        case 'Psychic':
            PokemonType1.style.color = '#F95587';
        break;
        case 'Fairy':
            PokemonType1.style.color = '#D685AD';
        break;
        case 'Steel':
            PokemonType1.style.color = '#B7B7CE';
        break;
        case 'Fighting':
            PokemonType1.style.color = '#C22E28';
        break;
        case 'Ground':
            PokemonType1.style.color = '#E2BF65';
        break;
        case 'Bug':
            PokemonType1.style.color = '#A6B91A ';
        break;
        case 'Normal':
            PokemonType1.style.color = '#A8A77A';
        break;
        case 'Rock':
            PokemonType1.style.color = '#B6A136';
        break;
        case 'Dark':
            PokemonType1.style.color = '#705746';
        break;
        case 'Grass':
            PokemonType1.style.color = '#7AC74C';
        break;
    }
}

function Colortext2(){
    switch(PokemonType2.innerText){
        case 'Poison':
            PokemonType2.style.color = '#A33EA1';
        break;
        case 'Ice':
            PokemonType.style.color = ' #96D9D6';
        break;
        case 'Fire':
            PokemonType2.style.color = ' #EE8130';
        break;
        case 'Water':
            PokemonType2.style.color = '#6390F0';
        break;
        case 'Dragon':
            PokemonType2.style.color = '#6F35FC';
        break;
        case 'Flying':
            PokemonType2.style.color = '#A98FF3';
        break;
        case 'Electric':
            PokemonType2.style.color = ' #F7D02C';
        break;
        case 'Ghost':
            PokemonType2.style.color = '#735797';
        break;
        case 'Psychic':
            PokemonType2.style.color = '#F95587';
        break;
        case 'Fairy':
            PokemonType2.style.color = '#D685AD';
        break;
        case 'Steel':
            PokemonType2.style.color = '#B7B7CE';
        break;
        case 'Fighting':
            PokemonType2.style.color = '#C22E28';
        break;
        case 'Ground':
            PokemonType2.style.color = '#E2BF65';
        break;
        case 'Bug':
            PokemonType2.style.color = '#A6B91A ';
        break;
        case 'Normal':
            PokemonType2.style.color = '#A8A77A';
        break;
        case 'Rock':
            PokemonType2.style.color = '#B6A136';
        break;
        case 'Dark':
            PokemonType2.style.color = '#705746';
        break;
        case 'Grass':
            PokemonType2.style.color = '#7AC74C';
        break;
    }
}

const RenderPokemon = async (pokemon) =>{
    PokemonName.innerHTML = 'Loading...';
    PokemonId.innerHTML = '';

    const data = await fetchpokemon(pokemon);
    if (data){
    SearchPokemon = data.id;
    PokemonImg.style.display = 'block';
    PokemonName.innerHTML = data.name;
    PokemonId.innerHTML = data.id;
    PokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    PokemonType2.innerHTML = data['types']['0']['type']['name']
    
    if(data['types'].length == 1){
        PokemonType1.innerHTML = data['types']['0']['type']['name']
    } else{
    PokemonType1.innerHTML = data['types']['1']['type']['name']
 }

    Colortext()
    Colortext2()
} else{
    PokemonImg.style.display = 'none';
    PokemonId.innerHTML = '404';
    PokemonName.innerHTML = 'Not found';
}
    PokemonInput.value = ''
}

PokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var search = PokemonInput.value
    var sear2 = search.toLowerCase()
    RenderPokemon(sear2)
})


PrevBtn.addEventListener('click',()=>{
    SearchPokemon += 1
    RenderPokemon(SearchPokemon)
})
Nextbtn.addEventListener('click',()=>{
    if(SearchPokemon > 1){
        SearchPokemon -= 1
        RenderPokemon(SearchPokemon)
    }
})

document.addEventListener('keypress', (e)=>{
    if(e.key === '39'){
        SearchPokemon += 1
    RenderPokemon(SearchPokemon)
    }
    if(e.key === '37'){
        if(SearchPokemon > 1){
            SearchPokemon -= 1
            RenderPokemon(SearchPokemon)
        }
    }

})

RenderPokemon(SearchPokemon)
