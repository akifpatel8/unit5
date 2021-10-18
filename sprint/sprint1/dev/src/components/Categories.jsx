import React from 'react'

function Categories() {
    return (
        <div>
            <h1>Categories</h1>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{margin:'10px'}}>
                    <img src="https://via.placeholder.com/350x150" alt="no" />
                    <h3>Art</h3>
                </div>
                <div style={{margin:'10px'}}>
                    <img src="https://via.placeholder.com/350x150" alt="no" />
                    <h3>Dance</h3>
                </div>
                <div style={{margin:'10px'}}>
                    <img src="https://via.placeholder.com/350x150" alt="no" />
                    <h3>Singing</h3>
                </div>
            </div>
        </div>
    )
}

export {Categories}
