import { ADD_DAY } FROM './actionConstants'
import { API_URL } from "../../apiConstants";

const addDay = (id, date) => {
fetch(API_URL +'/days', {
    method: "POST" ,
    headers: {
        'Content-type': 'application/json',
        Accept:'application/json'
    },
    body: JSON.stringify(
id,
date
    )
})
.then(r=> r.json())
.then(day => {
    return(
        dispatch({type:ADD_DAY, payload: day})
    )
}
)
}

export default addDay