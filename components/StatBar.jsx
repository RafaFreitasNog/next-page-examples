import styles from '../styles/components/StatBar.module.css'

function StatBar(props) {
  return ( 
    <>
    <p className=''>{props.name}</p>
    <div className={styles.barConteiner}>
      <div className={styles.barStat} style={{'width': `${props.base_stat/2}%`}}>
      </div>
    </div>
    </>
   );
}

export default StatBar;