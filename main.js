document.addEventListener("DOMContentLoaded",async()=>{

    //get when a data view type has been selected
    //const button = document.getElementsByClassName("ViewType");
     //await GetDefaultView();

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
    //try to gain the data
    try {
        //multi dimensional array 0=>types 1=>stats
        let pokemon_types = {}
        for(i=1;i<=50;i++)
        {
            cur_pokemon = await GetPokemon(i);
            //console.log(cur_pokemon);
            DisplayPokemon(cur_pokemon);
            pokemon_types = GetTypes(pokemon_types,cur_pokemon.types,cur_pokemon)
        }
        console.log(pokemon_types)
    }
    //if an error occurs display it in the console
    catch (e)
    {
        console.log("Encountered an Error");
        console.log(e);
    }

    
}


function DisplayPokemon(pokemon)
{
    
        //console.log(pokemon_list[i].name)
        const pokemon_container = document.getElementById("pokemon");
        const pokemonElement = document.createElement('div');
        pokemonElement.classList.add('pokemon-card');

        const pokemonInnerHTML = `
            <div class="img-container">
                
                <h2>${pokemon.id}: ${pokemon.name}</h2>
                <!--<img src="${pokemon.sprites.front_default}">-->
                <div class="pokeimage"><img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"></div>
                <p>Type:
                ${pokemon.types.length==1?pokemon.types[0].type['name']:
                pokemon.types[0].type['name']+" , "+pokemon.types[1].type['name']
                }
                </p>

                
            </div>
            
        
        `
        

        pokemonElement.innerHTML = pokemonInnerHTML;
        pokemon_container.appendChild(pokemonElement);
        
    
     
}



