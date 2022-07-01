import { data } from "../static/data/data"

export const AboutSectionWidget = _ => {
    return (
        <div className="about-section-widget section-widget">
            <p>{data.about}</p>
        </div>
    )
}