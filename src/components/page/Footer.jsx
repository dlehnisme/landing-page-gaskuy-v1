import React, { Component } from 'react'
import reactGa from 'react-ga'

export class Footer extends Component {
    handleClick = () => {
        reactGa.event({
        category: "Button WA",
        action: "Click the Button WA"
    })}
    
    handleClick2 = () => {
        reactGa.event({
        category: "Button Instagram Footer",
        action: "Click the Button Instagram Footer"
    })}

    render() {
        return (
            <div className='w-full bg-gray-200 flex md:flex-row flex-col md:p-10 p-16 md:justify-between'>
                <p className='text-gray-600'>2020 Gaskuy.ID, All Right Reserved</p>
                <div className='flex flex-row justify-center mt-4'>
                    <a href="https://www.instagram.com/gaskuy_indonesia/" onClick={this.handleClick2}>
                        <i className="fab fa-instagram text-gray-600 fa-2x"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=6282281411111&text=Halo Gaskuy.ID!" onClick={this.handleClick}>
                        <i className="fab fa-whatsapp text-gray-600 fa-2x ml-3"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer
