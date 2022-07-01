import { useEffect, useState } from "react"
import { data, plataforms, programmingLanguages } from "../static/data/data"

export const CoursesSectionWidget = _ => {
    const [seeAll, setSeeAll] = useState(false)
    const [defaultList, setDefaultList] = useState([])

    const changeState = _ => {
        initialState()
        setSeeAll(!seeAll)
    }

    const applyFilter = _ => {
        let status_id = parseInt(document.querySelector(`#stats-options`).value)
        let plataform_id = parseInt(document.querySelector(`#plataforms-options`).value)
        let programmingLanguage_id = parseInt(document.querySelector(`#programming-languages-options`).value)
        let arr = []

        for (let i = 0; i < data.courses.length; i++) {
            let c = data.courses[i]

            if (c.status.id === status_id &&  c.plataform.id === plataform_id && c.codingLanguage.id === programmingLanguage_id) {
                arr.push(c)
            }
        }

        setDefaultList(arr)
    }

    const removeFilter = _ => {
        setDefaultList(data.courses)
    }

    const initialState = _ => {
        let arr = []
        for (let i = 0; i < data.courses.length; i++) {
            if (i < 3) {
                arr.push(data.courses[i])
            }
        }
        setDefaultList(arr)
    }

    useEffect(() => {
        initialState()
    }, [])

    return (
        <div className="courses-section-widget section-widget">
            <div className="section-title">
                <h2>Courses</h2>

                <div>
                    {seeAll &&
                        <button onClick={initialState}>Reset filters</button>
                    }
                    
                    {seeAll &&
                        <button onClick={removeFilter}>Remove filters</button>
                    }
                    <button onClick={changeState}>{seeAll ? 'Close' : 'See all'}</button>
                </div>
            </div>

            {seeAll &&
                <div className="filters">
                    <select name="stats" id="stats-options">
                        <optgroup label="Stats">
                            <option value="2">Completed</option>
                            <option value="1">In Progress</option>
                            <option value="0">Not Started</option>
                        </optgroup>
                    </select>

                    <select name="plataforms" id="plataforms-options">
                        <optgroup label="Plataform">
                            {
                                plataforms.map((p, i) => (
                                    <option value={i}>{p.name}</option>
                                ))
                            }
                        </optgroup>
                    </select>

                    <select name="Programming Languages" id="programming-languages-options">
                        <optgroup label="Language">
                            {
                                programmingLanguages.map( (p, i) => (
                                    <option value={p.id}>{p.text}</option>
                                ))
                            }
                        </optgroup>
                    </select>

                    <button onClick={applyFilter}>Apply</button>
                </div>
            }

            <div className="courses-list">
                {/* TODO: MUDAR A COR PARA HEX */}
                {
                    defaultList.map((c, i) => (
                        <div className="container">
                            <img src={c.plataform.image} alt="" />
                            <div className="texts">
                                {
                                    c.status.id === 2 &&
                                    <a href={c.certificateLink} target={"_blank"} rel={"noreferrer"}>Certificate</a>
                                }

                                <p>{c.name}</p>

                                {c.status.id === 0 &&
                                    <small style={{ color: "red" }}>{c.status.text}</small>
                                }

                                {c.status.id === 1 &&
                                    <small style={{ color: "yellow" }}>{c.status.text}</small>
                                }

                                {c.status.id === 2 &&
                                    <small style={{ color: "green" }}>{c.status.text}</small>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}