import React from 'react'

const ToDo = (props) => {
    console.log(props)
    return(
        <div>
            <p>{props.item.name}</p>
        </div>
    )
}
export default ToDo;