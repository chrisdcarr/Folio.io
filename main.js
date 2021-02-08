document.addEventListener("DOMContentLoaded",async()=>{

    //get when a data view type has been selected
    const button = document.getElementsByClassName("ViewType");
    
    let poke_list = [];
    //default show the numerically listed pokemon gen1
    poke_list= await GetDefaultView();
    DisplayPokemon(poke_list);

    
})


async function GetPokemon(id)
{

    //fetch the data at the endpoint with based on the pokemon id number
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //turns data into json format
    const pokemon_data = await pokemon.json();
    //return data to function that called it
    return pokemon_data;
}

async function GetDefaultView()
{
    //create an array to hold the pokemon data
    //let list_of_pokemon = []

    //try to gain the data
    try {

        //list_of_pokemon = 
        for(i=1;i<=10;i++)
        {
            cur_pokemon = await GetPokemon(i);
            //list_of_pokemon.push(cur_pokemon);
            DisplayPokemon(cur_pokemon);
        }
    }
    //if an error occurs display it in the console
    catch (e)
    {
        console.log("Encountered an Error");
        console.log(e);
    }

    
    //console.log(list_of_pokemon[5].name);
    //return list_of_pokemon;
}

//function takes long because of data loading time
/*
function DisplayPokemon(pokemon_list)
{
    const pokemon_container = document.getElementById("pokemon");
    for(i=0;i<pokemon_list.length;i++)
    {
        //console.log(pokemon_list[i].name)
        //the code below would take too long
        const pokemonElement = document.createElement('div');
        pokemonElement.classList.add('pokemon-card');

        const pokemonInnerHTML = `
            <div class="img-container">
                
                <h2>${pokemon_list[i].id}: ${pokemon_list[i].name}</h2>
                <!--<img src="${pokemon_list[i].sprites.front_default}">-->
                <img src="https://pokeres.bastionbot.org/images/pokemon/${i+1}.png">
                
                <p>Type:
                ${pokemon_list[i].types.length==1?pokemon_list[i].types[0].type['name']:
                pokemon_list[i].types[0].type['name']+" , "+pokemon_list[i].types[1].type['name']
                }
                </p>
            </div>
            
        
        `

        //console.log(pokemon_list[i].types[0].type['name']);

        pokemonElement.innerHTML = pokemonInnerHTML;
        pokemon_container.appendChild(pokemonElement);
        
    }
     
}*/

function DisplayPokemon(pokemon)
{
    
        //console.log(pokemon_list[i].name)
        //the code below would take too long
        const pokemonElement = document.createElement('div');
        pokemonElement.classList.add('pokemon-card');

        const pokemonInnerHTML = `
            <div class="img-container">
                
                <h2>${pokemon.id}: ${pokemon.name}</h2>
                <!--<img src="${pokemon.sprites.front_default}">-->
                <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
                
                <p>Type:
                ${pokemon.types.length==1?pokemon.types[0].type['name']:
                pokemon.types[0].type['name']+" , "+pokemon[i].types[1].type['name']
                }
                </p>
            </div>
            
        
        `

        //console.log(pokemon_list[i].types[0].type['name']);

        pokemonElement.innerHTML = pokemonInnerHTML;
        pokemon_container.appendChild(pokemonElement);
        
    
     
}