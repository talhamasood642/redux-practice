import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {

    const amount = useSelector(state => state.amount)

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">State Bank Of Talha</a>
                        <div>
                            
                            <button disabled={true} className='btn btn-primary'>Your Balance is: {amount}</button>

                        </div>
                    </div>
                
            </nav>
        </>
    )
}

export default NavBar
