import {Button} from "./Button"
import ReactDOM from "react-dom"

it('shoul be rendered currectly',()=>{
    const div =document.createElement('div')
    ReactDOM.render(<Button/>,div)
})