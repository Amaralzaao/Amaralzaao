import IndexScreen from "./screens";
import {Route, Routes} from 'react-router-dom'
import Graduation from "./screens/graduation";

export default function Urls() {
    return (
        <Routes>
            <Route path="/" element={<IndexScreen/>}/>
            <Route path="/graduation" element={<Graduation/>}/>
        </Routes>
    )
}