import robot from './imgs/robotic-arm.png'
import styles from './RobotCard.module.css'
import React, { useState, useRef, useEffect } from 'react'
import StatusBar from '../StatusBar/StatusBar'

export default function RobotCard(props) {
    const [buttonState, setButtonState] = useState({
        "actual": false,
        "previous": false
    })
    const [robotState, setRobotState] = useState({
        "Connection": false,
        "Activated": false,
        "Homed": false
    })
    const isMounted = useRef(false)

    function onClickHandle() {
        console.log('Clicked')
        console.log(buttonState)
        if (buttonState["actual"]) {
            setButtonState({
                ...buttonState,
                "actual": false
            })
        } else {
            console.log('Butts')
            setButtonState({
                ...buttonState,
                "actual": true
            })
        }
    }



    useEffect(() => {
        const interval = setInterval(() => {
            setButtonState(prevButtonState => {
                if (prevButtonState["actual"] !== prevButtonState["prev"]) {
                    return {
                        ...prevButtonState,
                        "previous": prevButtonState["actual"]
                    }
                } else {
                    return {
                        ...prevButtonState,
                        "previous": prevButtonState["actual"]
                    }
                }
            })
        }, 1000)

    }, [])




    return (
        <div className={styles.robotcard}>
            <div className={styles.titles}>
                <h1 className={styles.title}>
                    {props.name}
                </h1>
                <p className={styles.ipaddress}>{props.ipaddress}</p>
            </div>
            {/* <button onClick={onClickHandle}>Click me</button> */}
            <img src={robot} alt='Robot Logo' className={styles.robotlogo}></img>
            <StatusBar buttonState={buttonState["actual"]} robotState={robotState} />

        </div>
    )
}
