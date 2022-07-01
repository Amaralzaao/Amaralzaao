import { data } from "../static/data/data"

export const LanguageSectionWidget = _ => {
    return (
        <div className="languages-section-widget section-widget">
            <div className="section-title">
                <h2>Languages</h2>
            </div>

            <div className="container">
                {
                    data.languages.map( (l, i) => (
                        <div className="language-item" key={i} style={{ backgroundImage: `url(${l.image})` }}>
                            <div className="content">
                                <h3>{l.name}</h3>
                                <progress value={l.note} max={100}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}