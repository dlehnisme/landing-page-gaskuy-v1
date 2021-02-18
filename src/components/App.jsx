import React, { Component } from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import Blog from './page/Blog'
import ComingSoon from './page/ComingSoon'
import Footer from './page/Footer'
import Hero from './page/Hero'
import HowItWork from './page/HowItWork'
import Problems from './page/Problems'
import reactGa from 'react-ga'

export class App extends Component {
    componentDidMount(){
        reactGa.initialize('UA-178754529-1')

        reactGa.pageview(window.location.pathname + window.location.search)
    }
    render() {
        return (
            <BrowserRouter>
            <div>
                <Route path='/' exact component={Hero} />    
                <Route path='/' exact component={Problems} />    
                <Route path='/' exact component={HowItWork} />    
                <Route path='/' exact component={Blog} />    
                <Route path='/' exact component={Footer} />    
                <Route path='/coming-soon'  component={ComingSoon} />    
            </div>
            </BrowserRouter>
        )
    }
}

export default App
