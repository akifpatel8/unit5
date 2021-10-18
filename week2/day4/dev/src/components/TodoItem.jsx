import React, { memo } from 'react'

function TodoItem({data,handleToggle}) {
    console.log(data.title);

    return (
        <div>
            <h1>{data.title}</h1>
            <button onClick={()=>{handleToggle(data.id)}}>{`${data.status}`}</button>
        </div>
    )
}
const M=memo(TodoItem)
export {TodoItem,M}
