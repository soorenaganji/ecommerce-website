import React from 'react';
import styles from './About.module.css'
import team from './team.jpg'
const About = (props) => {
    return (
        <div className={props.home ? styles.container : styles.containeer} >
            <h1>About Us</h1>
            <div className={styles.cont} >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius doloremque esse ratione delectus quis non fuga minus quam, provident quo id atque laborum, cupiditate nulla, fugiat quaerat eligendi ipsa error quia? Minus fugit aspernatur repellat dolorum incidunt laboriosam, iusto consectetur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius doloremque esse ratione delectus quis non fuga minus quam, provident quo id atque laborum, cupiditate nulla, fugiat quaerat eligendi ipsa error quia? Minus fugit aspernatur repellat dolorum incidunt laboriosam, iusto consectetur?</p>
            <img src={team} />
            </div>
        </div>
    );
};

export default About;