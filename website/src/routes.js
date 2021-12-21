import IndexScreen from "./screens";
import {Route, Routes} from 'react-router-dom'
import Graduation from "./screens/graduation";

export default function Urls() {
    return (
        <Routes>
            <Route path="/" element={<IndexScreen/>}/>
            <Route path="/graduation" element={<Graduation/>}/>
            <Route path="/*" element={<h1>Opss, não encontramos esta página</h1>}/>
        </Routes>
    )
}