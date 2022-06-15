import React, { useState } from 'react'
import RobotCard from '../RobotCard/RobotCard'
import styles from './CardHolder.module.css'
import plus from './AddCardButton/imgs/plus.png'
import AddRobotDialog from './AddRobotDialog/AddRobotDialog'


export default function CardHolder() {
    const [numCards, setNumCards] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    async function onClickHandle(name, ipaddress) {
        if (!numCards.filter(e => e.ip === ipaddress).length > 0) {
            var connection = false;
            const response = await fetch('/registerRobot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ip: ipaddress })
            })
            const connectionStatus = await response.json()
            console.log(connectionStatus)
            connection = connectionStatus
            console.log(connection)
            if (connection) {
                setNumCards(prevNumCards => {
                    return [...prevNumCards, {
                        'ip': ipaddress,
                        'card': <RobotCard name={name} ipaddress={ipaddress} />
                    }]
                })
                closeModal()
            } else {
                alert('Could not connect to this address')
            }
        } else {
            alert('This IP address is already in use')
        }
    }

    return (
        <div className={styles.cardholder}>
            {numCards.map((item) => {
                return item.card
            })}
            <button className={styles.addbutton} onClick={openModal}><img className={styles.plussign} src={plus} /></button>
            {isOpen && (
                <AddRobotDialog createRobotHandle={onClickHandle} closeDialogHandle={closeModal} />
            )}

        </div>
    )
}
