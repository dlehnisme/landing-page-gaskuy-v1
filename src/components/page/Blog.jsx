import React, { Component } from 'react'
import Axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';

let axios = Axios.create({
    baseURL: 'https://blog.gaskuy.id/'
})
export class Blog extends Component {
    state = {
        blog: null,
        image: ''
    }
    componentDidMount(){
        axios.get(`/wp-json/wp/v2/posts?per_page=3`)
        .then(res=>{
            let data = res.data[2].yoast_head.split("content=")
            let image = data[11].split("/>")[0]
            this.setState({blog: res.data, image})
        })
        .then(err=>{
            console.log(err)
        })
    }
    renderBlog = () => {
        let blog = this.state.blog.map((data, index)=>{
            let datas = data.yoast_head.split("content=")
            let image = datas[11].split("/>")[0]
            let imageBlog = image.slice(1, image.length-2)
            return(
                <a
                key={index} 
                href={data.link}>
                    <div className='rounded-md md:p-6 p-10 border border-gray-300'>
                    <img src={imageBlog} alt= {data.title.rendered} className='mx-auto rounded-lg' style={{maxHeight:200, minHeight:200, maxWidth: 260, minWidth:260}} />
                        <p className='italic mt-6'> {parseInt(data.categories.toString()) === 25 ? 'Destination' : parseInt(data.categories.toString()) === 26 ? 'Event' : parseInt(data.categories.toString()) === 27 ? 'Journal' : parseInt(data.categories.toString()) === 28 ? 'Travel Tips' : 'Others' } </p>
                        <h1 className='uppercase text-gray-700'> {data.title.rendered} </h1>
                    </div>
                </a>
            )
        })
        return blog
    }
    render() {
        if(this.state.blog === null){
            return (
                <div className='flex flex-col w-10 mx-auto h-10 my-10'>
                    <CircularProgress color="primary" />
                </div>
            )
        }
        return (
            <div className='py-12 bg-white'>
                <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
                    {/* Tulisan How It works */}
                    <div className='text-center'>
                        <p className='text-base leading-6 font-semibold tracking-wide uppercase text-green-900'>
                            BLOG
                        </p>
                    </div>
                    <div className="lg:text-center">
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            Tambah Referensi Liburanmu
                        </h3>
                        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                            Masih ragu untuk liburan ? Yuk tambah dan update informasi tentang liburan, destinasi hits, tips <i>traveling</i>, dan masih banyak lagi.
                        </p>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-8'>
                        {this.renderBlog()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog
