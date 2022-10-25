import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from '../styles/Repo-list.module.css'

function RepoList({ pokemons }) {
  return ( 
    <>
    <Header/>
    <div className={styles.pageWrapper}>
      <div className={styles.pageContent}>
        <ul className={styles.pokemonList}>
          {pokemons.map((pokemon) => 
            <li key={pokemon.name}>
              <Link href={`pokemons/${pokemon.name}`} ><h5>{pokemon.name}</h5></Link>
            </li>
          )}
        </ul>
      </div>
    </div>
    <Footer/>
    </>
   );
}

export default RepoList;

export async function getServerSideProps() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
  const { results } = await response.json()

  return {
    props: {
      pokemons: results,
    },
  }
}

