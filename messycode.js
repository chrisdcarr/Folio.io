
const num_of_pokemon= 1;
const button = document.getElementById('enter');

//listen for when button is pressed and change pokemon
button.addEventListener('click',async()=>asyncFuncCall())

//get the input
function GetDisplayMethod()
{
    const which_pokemon = document.getElementById('pokemon_number').value;
    //console.log(which_pokemon+" was selected");
    return which_pokemon;
}
//GetPokemon()
async function GetPokemon()
{
    
    //const id = GetDisplayMethod();
    //fetches data at this endpoint
    const pokeList = await fetch( `https://pokeapi.co/api/v2/pokemon/${id}`)
    //turns data into jason format
    const data = await pokeList.json();
    //return data to caller function
    return data;
    //console.log(data);
}


//load page 
document.addEventListener("DOMContentLoaded",async()=>{

   asyncFuncCall();
})

async function asyncFuncCall()
{
    let list_of_pokemon = []

    try {
        list_of_pokemon = await GetPokemon();
    }catch (e)
    {
        console.log("Encountered an Error");
        console.log(e);
    }

    
    const html = `
    <div class="name">${list_of_pokemon.name}</div>
    <img src = ${list_of_pokemon.sprites.front_default}
    <div class = "details">
        <span> Height: ${list_of_pokemon.height}</span>
        <span> Weight: ${list_of_pokemon.weight}</span>
    </div>
    `

    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
    
    console.log(list_of_pokemon);
}

/*
//when menu is selected determine how to display info

/*
            IF POKEDEX VIEW THEN 
            JUST DISPLAY POKEMON



/*
            IF BY TYPE 
            GET LIST OF TYPES 
            GROUP POKEMON BASED ON TYPES
            GET COUNT OF EACH TYPE
            DISPLAY GRAPH SHOWING HOW MUCH OF EACH TYPE BASED ON FIRST TYPE
            DISPLAY HORIZONTALLY 
            BACKGROUND IS THE COLOR OF THE TYPE


*/
