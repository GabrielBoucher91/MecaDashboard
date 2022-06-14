import React, { useState } from 'react'
import RobotCard from '../RobotCard/RobotCard'
import styles from './CardHolder.module.css'
import plus from './AddCardButton/imgs/plus.png'


export default function CardHolder() {
    const [numCards, setNumCards] = useState([<RobotCard />])
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    function onClickHandle() {
        setNumCards(prevNumCards => {
            return [...prevNumCards, <RobotCard />]
        })
    }

    return (
        <div className={styles.cardholder}>
            {numCards.map((item) => {
                return item
            })}
            <button className={styles.addbutton} onClick={onClickHandle}><img className={styles.plussign} src={plus} /></button>
            <button onClick={openModal}>Open dialog</button>
            {isOpen && (
                <div>
                    <h1>Dialog Box</h1>
                    <p>This is a dialog box</p>
                    <button onClick={closeModal}>Close</button>
                </div>
            )}

        </div>
    )
}
