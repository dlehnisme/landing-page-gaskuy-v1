import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import gaskuyWhite from '../../assets/image/GaskuyWhite.png'
import reactGa from 'react-ga'
export class Hero extends Component {
  
  handleClick = () => {
    reactGa.event({
      category: "Button Get Started",
      action: "Click the Button Get Started"
    })
  }  
  // RENDER SECTION
    renderHero = () => {
      return(
        <div className="relative overflow-hidden bg-home sm:bg-white">
          <img src={gaskuyWhite} width={200} alt="gaskuy.id" className='mx-auto mt-10 md:w-0 md:h-0' />
            <div className="max-w-screen-xl mx-auto mt-20 md:mt-0">
              <div className="relative z-10 pb-8 sm:bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  
                </div>
                <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white md:text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                      Liburan ga pake ribet ?
                      <br className="xl:hidden" />
                      <span className='text-green-900 ml-2'>Ya kali ga kuy</span>
                    </h2>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Dengan Gaskuy selama liburan akan selalu merasa aman tanpa ada rasa takut tanpa tujuan atau over budget
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                      <Link to='/coming-soon'>
                        <div 
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-900 hover:bg-gray-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                        onClick={this.handleClick}
                        >
                          Get started
                        </div>
                      </Link>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 w-0">
              <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt='gaskuyid' />
            </div>
            </div>
      )
    }
    render() {
        return (
            <div>
                {this.renderHero()}
            </div>
        )
    }
}

export default Hero
