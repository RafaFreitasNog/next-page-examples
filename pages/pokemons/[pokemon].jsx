import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from '../../styles/Pokemonpage.module.css'

function PokemonPage({ pokemonData }) {

  const router = useRouter()

  if (router.isFallback) {
    return <h6>Loading...</h6>
  }
  
  return ( 
    <>
    <Header />
    <div className={styles.pageContent}>
      <div className={styles.pokemonCard}>
        <h6 className="bold" >{pokemonData.name}</h6>
        <div style={{'background-image': `url(${pokemonData.sprites.front_default})` }} className={styles.imgConteiner}></div>
      </div>
    </div>
    <Footer />
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
  const pokemonData = await response.json()

  return {
    props: {
      pokemonData,
    },
  }
}