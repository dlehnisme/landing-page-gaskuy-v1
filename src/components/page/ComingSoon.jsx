import React, { Component } from 'react'
import tangan from '../../assets/image/TANGAN.png'
import reactGa from 'react-ga'

export class ComingSoon extends Component {
    handleClick = () => {
        reactGa.event({
        category: "Button Instagram from Coming Soon",
        action: "Click the Button Instagram from Coming Soon"
    })}
    render() {
        return (
            <div className='w-full bg-gradient-to-r from-green-900 to-green-800 h-full'>
                <div className='flex flex-col-reverse md:flex-row'>
                    <img src={tangan} alt="gaskuy-id"/>
                    <div className='flex flex-col md:mt-64'>
                        <p className='text-6xl font-bold text-white text-center'>Coming Soon</p>
                        <p className='text-xl text-center font-bold text-white'>Follow Our Instagram For Further Information About Gaskuy.ID </p>
                        <a 
                        href="https://www.instagram.com/gaskuy_indonesia/"
                        
                        >
                            <div className="flex mt-5 items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-900 hover:bg-gray-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 w-40 mx-auto"
                            onClick={this.handleClick}
                            >
                                <i className="fab fa-instagram text-white mr-4 fa-2x"></i>
                                <p className='text-lg'>
                                    Instagram
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComingSoon
