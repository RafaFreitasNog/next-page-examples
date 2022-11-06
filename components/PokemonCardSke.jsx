import styles from '../styles/components/PokemonCardSke.module.css'

function PokemonCardSke() {
  return ( 
    <>
    <div className={styles.pageContent}>
      <div className={styles.pokemonCard}>
        <div className={styles.h6Skeleton}></div>
        <div className={styles.imgConteiner}></div>

        <div className={styles.statList}></div>
        <div className={styles.statList}></div>
        <div className={styles.statList}></div>
        <div className={styles.statList}></div>
        <div className={styles.statList}></div>
        <div className={styles.statList}></div>
        
      </div>
    </div>
    </>
   );
}

export default PokemonCardSke;