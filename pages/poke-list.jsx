import Link from "next/link";
import styles from '../styles/Repo-list.module.css'

function RepoList({ pokemons }) {
  return ( 
    <>
    <div className={styles.pageWrapper}>
      <div className={styles.pageContent}>
        <h1 className="bold">Static Generation with <span className="blue">Dynamic</span> Routing</h1>
        <h6>Each one of this pokemons in the list has a static page generated at build time using the dynamic route <span className="blue">&apos;pokemon/[pokemon].js&apos;</span> with <span className="red">getStaticPaths</span> and <span className="red">getStaticProps</span>.</h6>
        <ul className={styles.pokemonList}>
          {pokemons.map((pokemon) => 
            <li key={pokemon.name}>
              <Link href={`pokemons/${pokemon.name}`} ><p>{pokemon.name}</p></Link>
            </li>
          )}
        </ul>
        <h6>The <span className="blue">'/pokemons/[pokemon]'</span> page also uses <span className="red">'fallback: true'</span>. So if you type any valid name value for [pokemon] (ex: 'pokemons/pikachu'), even if it hasn't been already statically generated at build time, a new static page will be generated and cached for that value.</h6>
      </div>
    </div>
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

