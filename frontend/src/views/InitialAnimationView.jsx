import {data} from "../static/data/data"

export const InitialAnimationView = _ => {
    return (
        <div className="initial-animation-view">
            <h3> Developed by: </h3>
            <h1> {data.name} </h1>
        </div>
    )
}