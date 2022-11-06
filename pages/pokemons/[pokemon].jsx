import { useRouter } from "next/router";
import PokemonCardSke from "../../components/PokemonCardSke";
import StatBar from "../../components/StatBar";
import styles from '../../styles/Pokemonpage.module.css'

function PokemonPage({ pokemonData }) {

  const router = useRouter()

  if (router.isFallback) {
    return <PokemonCardSke />
  }

  return ( 
    <>
    <div className={styles.pageContent}>
      <div className={styles.pokemonCard}>
        <h6 className="bold" >{pokemonData.name}</h6>
        <div style={{'backgroundImage': `url(${pokemonData.front_sprite})` }} className={styles.imgConteiner}></div>
        <div className={styles.statList}>
        {pokemonData.stats.map((element) =>
          <StatBar
          key={element.name}
          name={element.name} 
          base_stat={element.base_stat}/>
          )}
        </div>
      </div>
    </div>
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
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { pokemon } = params
  const response = await fetch(`https://pokeapi.co/api/v2//pokemon/${pokemon}`)
  const data = await response.json()

  const stats = data.stats.map((element) => {
    return {
      name: element.stat.name,
      base_stat: element.base_stat,
    }
  })
  const pokemonData = {
    name: data.name,
    front_sprite: data.sprites.front_default,
    stats
  }

  return {
    props: {
      pokemonData,
    },
  }
}