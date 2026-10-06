import styles from './Card.module.css';


function Card(props) {
    return(
        <div className={styles.card}>
            <img className={styles.card_image} src={props.image || "./hinata.jpg"} alt="Hinata Shoyo Gacha" width="150px" height="150px"/>
            <h2 className={styles.card_title}>{ props.name || "Hinata Shoyo"}</h2>
            <p className={styles.card_description}>{props.team_position  || "Karasuno Middle Blocker"} </p>
        </div>

    );
}

export default Card;