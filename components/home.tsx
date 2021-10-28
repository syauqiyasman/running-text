import { useState } from "react"
import Head from "next/head"
import Marquee from "react-fast-marquee"
import { randomData } from "../lib/random-data"

export default function Home() {

    const [data, setData] = useState({
        input: "Enter text"
    })

    const { input } = data

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: any) => e.preventDefault()

    const [fullscreen, setFullscreen] = useState(false)

    const handleFullscreen = () => {
        if (fullscreen) {
            setFullscreen(false)
        } else {
            setFullscreen(true)
        }
    }

    const [play, setPlay] = useState(false)

    const handlePlay = () => {
        if (play) {
            setPlay(false)
        } else {
            setPlay(true)
        }
    }
    let pause = true

    if (play) {
        pause = false
    }

    const [direction, setDirection] = useState("left")

    const handleDirection = () => {
        if (direction === "left") {
            setDirection("right")
        } else {
            setDirection("left")
        }
    }

    const defaultSpeed = 500
    const [speed, setSpeed] = useState(defaultSpeed)

    const resetSpeed = () => setSpeed(defaultSpeed)
    const handleSpeedPlus = () => {
        setSpeed(speed + 50)
    }

    const handleSpeedMinus = () => {
        if (speed > 0) {
            setSpeed(speed - 50)
        }
    }

    const defaultFontSize = 20
    const [fontSize, setFontSize] = useState(defaultFontSize)

    const resetFontSize = () => setFontSize(defaultFontSize)
    const handleFontSizePlus = () => {
        setFontSize(fontSize + 1)
    }

    const handleFontSizeMinus = () => {
        if (fontSize > 1) {
            setFontSize(fontSize - 1)
        }
    }

    const defaultEndSpace = 5
    const [endSpace, setEndSpace] = useState(defaultEndSpace)

    const resetEndSpace = () => setEndSpace(defaultEndSpace)
    const handleEndSpacePlus = () => {
        setEndSpace(endSpace + 1)
    }

    const handleEndSpaceMinus = () => {
        if (endSpace > 0) {
            setEndSpace(endSpace - 1)
        }
    }

    const random = Math.floor(Math.random() * randomData.length)
    const rand = randomData[random]
    const handleRandom = () => {
        setData({ input: rand.input })
        setSpeed(rand.speed)
        setFontSize(rand.fontSize)
        setEndSpace(rand.endSpace)
        setDirection(rand.direction)
        if (!play) {
            setPlay(true)
        }
    }

    return (
        <>
            <Head>
                <title>Running Text</title>
            </Head>
            <div className="DQcowN">
                {
                    fullscreen
                        ?
                        <div className="WmcrVj" onClick={handleFullscreen} />
                        :
                        <div className="XOMcsF">
                            <p className="tenkzd">Running Text</p>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className="Xlinb9"
                                    name="input"
                                    value={input}
                                    onChange={handleChange}
                                    placeholder="Enter text"
                                />
                            </form>

                            <button onClick={handlePlay}>{!play ? "Play" : "Pause"}</button>
                            <button onClick={handleDirection}>Direction: {direction === "left" ? "left" : "right"}</button>
                            <button onClick={handleFullscreen}>Full screen</button>
                            <button onClick={handleRandom}>Random</button>
                            <div>
                                <p className="VhXyZO">Speed: {speed}</p>
                                <button onClick={handleSpeedMinus}>-</button>
                                <button onClick={handleSpeedPlus}>+</button>
                                <button onClick={resetSpeed}>Reset</button>
                            </div>
                            <div>
                                <p className="VhXyZO">Font size: {fontSize}</p>
                                <button onClick={handleFontSizeMinus}>-</button>
                                <button onClick={handleFontSizePlus}>+</button>
                                <button onClick={resetFontSize}>Reset</button>
                            </div>
                            <div>
                                <p className="VhXyZO">End space: {endSpace}</p>
                                <button onClick={handleEndSpaceMinus}>-</button>
                                <button onClick={handleEndSpacePlus}>+</button>
                                <button onClick={resetEndSpace}>Reset</button>
                            </div>
                        </div>
                }

                <div onClick={handleFullscreen} className={fullscreen ? "hsaJW1" : ""}>
                    <Marquee
                        speed={speed}
                        gradient={false}
                        play={play}
                        direction={direction === "left" ? "left" : "right"}
                        pauseOnHover={pause}
                        pauseOnClick={pause}
                    >
                        <p className="TwMN2l" style={{ fontSize: fontSize + "rem", marginRight: endSpace + "rem" }}>
                            {input}
                        </p>
                    </Marquee>
                </div>
            </div>
        </>
    )
}
