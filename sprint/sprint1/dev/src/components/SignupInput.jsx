import React from 'react'

function SignupInput() {
    return (
        <div>
            <div>
                <input type="text" placeholder="enter your name" /><br />
                <input type="number" placeholder="enter your age" /><br />
                <input type="text" placeholder="enter your location" /><br />
                <input type="text" placeholder="enter your Interest" /><br />
                <input type="password" placeholder="enter your password" /><br />
                <button>Submit</button>
            </div>
        </div>
    )
}

export {SignupInput}
