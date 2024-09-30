const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  //Ex1:
  console.dir(pokemon, { maxArrayLength: null });
//Ex2:
  console.log('Exercise 2 results:',game);
// Ex3:
game.difficulty = "Medium"; 
console.log('Exercise 3 results:',game.difficulty);
// Ex4:
const starterPokemon = pokemon.filter(pokemon => pokemon.type ==='grass' && pokemon.hp >90);
game.party.push(pokemon[0]);
console.log('Exercise 4 results:',game.party);
// Ex5
game.party.push(pokemon[1]);
game.party.push(pokemon[4]);
game.party.push(pokemon[9]);
console.log('Exercise 5 results:',game.party);
//Ex6:
for (let gym of game.gyms){
    if (gym.difficulty < 3){
        gym.completed = true;
    }
}
  console.log('Exercise 6 results:',game.gyms);
//Ex7:
const updateP1 = game.party.splice(0,1,pokemon[1]);
const updateP2 = game.party.splice(1,1,pokemon[4]);
const updateP3 = game.party.splice(2,1,pokemon[7]);
const updateP4 = game.party.splice(3,1,pokemon[25]);
 console.log('Exercise 7 results:',game.party);
//Ex8:
const party = [
    { name: 'Pikachu' },
    { name: 'Bulbasaur' },
    { name: 'Charmander' },
    { name: 'Squirtle' }
];
for (let pokemon of game.party){
    console.log('Exercise 8 result:', pokemon.name);
}
//Ex9: 
const starterPokemons = pokemon.filter(p => p.starter);
starterPokemons.forEach
    (p => {console.log('Exercise 9 result:', p.name)}
);

//EX10:
const catchPokemon = pokemon.filter(pokemon => pokemon.type ==='grass' && pokemon.hp >90);
    game.catchPokemon = function(pokemonObj) {
        game.party.push(pokemonObj); 
 };
game.catchPokemon(catchPokemon);
console.log('Exercise 10 result:',game);

//Ex11:
const catchPokemon1 = pokemon.filter((pokemon) => pokemon.hp > 90 && pokemon.type === 'dragon');
game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj); 
    game.items.find(item => item.name === "pokeball");
};
  game.catchPokemon(catchPokemon);
  console.log('Exercise 11 result:', game.items);

  //Ex12:
  const gyms = [
    { name: 'Gym A', difficulty: 5, complete: false },
    { name: 'Gym B', difficulty: 7, complete: false },
    { name: 'Gym C', difficulty: 4, complete: false },
    { name: 'Gym D', difficulty: 6, complete: false },
];
gyms.forEach(gym => {
    if (gym.difficulty < 6) {
        gym.complete = true; 
    }
});
console.log('Exercise 12 result:', game.gyms);

 //Ex13: 
 game.gymStatus = function()
  {
    const gymTally = {
        completed: 0,
        incomplete: 0
    };
    game.gyms.forEach(gym => {
        if (gym.completed) {
            gymTally.completed++; 
        } else {
            gymTally.incomplete++; 
        }
    });
console.log("gymTally:");
console.log(gymTally);
  };
console.log(game);
game.gymStatus();
console.log('Exercise 13 result:',game.gymStatus);

//Ex14:
game.partyCount = function() {
    return this.party.length;
  };
  console.log('Exercise 14 result:',game.partyCount());

//Ex15:
game.gyms.forEach(gym => {
    if (gym.difficulty < 8) {
        gym.completed = true; 
    }
});
console.log(game);
console.log('Exercise 15 result:', game.gyms);
//Ex16: 
console.log('Exercise 16 result:', game);



