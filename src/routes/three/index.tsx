import { component$ } from "@builder.io/qwik";
import {ThreeJS} from './three'
export default component$(()=> {
    return(
        <div style={{ width: "100%", height: "100vh", margin: 0, backgroundColor: '#212121' }}>
        <ThreeJS client:visible/>
        </div>
    )
})