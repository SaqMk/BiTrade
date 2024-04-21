import React from 'react'
import styles from '../OurAdvantage/ourAdvanteg.module.css'
import ptichka from '../../images/Ptichka.svg'
export default function OurAdvanteg() {
    const Advantage = [
        {
            content:'High-end trading platform with a wide range of financial assets.'
        },
        {
            content:'Some of the most advantageous trading terms and investment opportunities on the market.'
        },
        {
            content:'Analytical trading services.'
        },
        {
            content:'Convenient for both experienced and novice traders.'
        },
        {
            content:'Helpful high quality tutorials.'
        },
        {
            content:'Efficient and highly professional client support staff.'
        },
        {
            content:'Quotes from leading world news agencies.'
        },
    ]
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <p className={styles.title}>Our advantage</p>
            <div className={styles.advantagesContent}>
                {Advantage.map((e) => (
                    <div className={styles.adContent}>
                        <img className={styles.ptichkaIcon} src={ptichka}/>
                        <p className={styles.content}>{e.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
