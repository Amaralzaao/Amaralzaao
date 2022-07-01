import { useEffect, useState } from "react"
import { data } from "../static/data/data"
import "../static/scss/ExperienceSectionWidget.scss"

export const ExperienceSectionWidget = _ => {
    const [seeAll, setSeeAll] = useState(false)
    const [defaultList, setDefaultList] = useState([])

    const applyFilter = _ => {
        let arr = []
        for (let i = 0; i < data.experiences.length; i++) {
            let obj = data.experiences[i]
            if (obj.showInIndex) {
                arr.push(obj)
            }
        }

        setDefaultList(arr)
    }

    const changeState = _ => {
        setSeeAll(!seeAll)
    }

    useEffect(() => {
        applyFilter()
    }, [])

    return (
        <div className="experience-section-widget section-widget">
            <div className="section-title">
                <h2>Experiences</h2>
                <button onClick={changeState}>{seeAll ? 'Close' : 'See all'}</button>
            </div>

            <div className="container">
                {
                    !seeAll &&
                    defaultList.map((e, i) => (
                        (
                            e.showInIndex &&
                            <div className="experience-item" key={i}>
                                <div className="top">
                                    <small>{e.startDate}{e.didFinished ? `- ${e.endDate}` : ` - To now`}</small>
                                    <small>{e.job}</small>
                                </div>

                                <h3>{e.company}</h3>

                                <a href={e.link} target="_blank" rel="noreferrer">See more</a>
                            </div>
                        )
                    ))
                }

                {
                    seeAll &&
                    data.experiences.map((e, i) => (
                        <div className="experience-item" key={i}>
                            <div className="top">
                                <small>{e.startDate}{e.didFinished ? `- ${e.endDate}` : ` - To now`}</small>
                                <small>{e.job}</small>
                            </div>

                            <h3>{e.company}</h3>

                            <a href={e.link} target="_blank" rel="noreferrer">See more</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}