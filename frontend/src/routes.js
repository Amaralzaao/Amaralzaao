import { Route, Routes } from "react-router-dom"
import { IndexViewController } from "./views/IndexViewController"

export const URLS = _ => {
    return (
        <Routes>
            <Route path="/" element={<IndexViewController/>}/>
        </Routes>
    )
}