import { useEffect, useState } from "react"
import { IndexView } from "./IndexView"
import { InitialAnimationView } from "./InitialAnimationView"
import {sleep} from "../static/functions/sleep"

export const IndexViewController = _ => {
    const [didFinishedAnimation, setDidFinishedAnimation] = useState(false)

    useEffect( () => {
        // sleep(5000)
        sleep(0)
        .then( _ => {
            setDidFinishedAnimation(true)
        })
    })

    return (
        <main>
            {
                didFinishedAnimation ?
                <IndexView/>
                :
                <InitialAnimationView/>
            }
        </main>
    )
}