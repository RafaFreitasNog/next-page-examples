function PokemonPage({ pokemonData }) {
  return ( 
    <>
    <h1>{pokemonData.name}</h1>
    </>
   );
}

export default PokemonPage;

export async function getStaticPaths(params) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
  const { results } = await response.json()
  const paths = results.map((pokemon) => {
    return {
      params: {pokemon: `${pokemon.name}`}
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { pokemon } = params
  const response = await fetch(`https://pokeapi.co/api/v2//pokemon/${pokemon}`)
  const pokemonData = await response.json()

  return {
    props: {
      pokemonData,
    },
  }
}