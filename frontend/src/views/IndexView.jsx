import { data } from "../static/data/data"
import { AboutSectionWidget } from "../widgets/AboutSectionWidget";
import { CoursesSectionWidget } from "../widgets/CoursesSectionWidget";
import { ExperienceSectionWidget } from "../widgets/ExperienceSectionWidget";
import { LanguageSectionWidget } from "../widgets/LanguageSectionWidget";

export const IndexView = _ => {
    let i = Math.random(0, data.areas.length).toFixed();

    return (
        <div className="index-view">
            <div className="container">
                <div className="banner">
                    <h1>{data.name}</h1>
                    <h4>{data.areas[i].text} <span>|</span> {data.areas[i].subtitle}</h4>
                    <AboutSectionWidget />
                </div>

                <ExperienceSectionWidget />
                <CoursesSectionWidget />
                <LanguageSectionWidget />
                {/* <ContactSectionWidget/> */}
            </div>
        </div>
    )
}