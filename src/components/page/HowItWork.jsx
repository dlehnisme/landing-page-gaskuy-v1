import React, { Component } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import HTW1 from '../../assets/image/1bulat-1.png'
import HTW2 from '../../assets/image/1bulat-2revisi.png'
import HTW3 from '../../assets/image/1bulat-3.png'
import HTW4 from '../../assets/image/1bulat-4.png'
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

const caption = [
    {
        id: 1,
        caption: 'Pilih Destinasi',
        subCaption: 'Masukan Budget, Pilih Kota, Tanggal dan Jumlah Orang',
        picture: HTW1
    },
    {
        id: 2,
        caption: 'Atur Keperluan',
        subCaption: 'Transportasi, Penginapan, Aktivitas, dan Tempat Makan',
        picture: HTW2
    },
    {
        id: 3,
        caption: 'Bayar di Aplikasi',
        subCaption: 'Lakukan Pembayaran liburanmu di Aplikasi Gaskuy.ID',
        picture: HTW3
    },
    {
        id: 4,
        caption: 'Enjoy the travel !',
        subCaption: 'Selamat liburan dan Selamat bersenang-senang Bersama Gaskuy.ID :)',
        picture: HTW4
    },
]

export class HowItWork extends Component {

    renderHowItWork = () => {
        let render = caption.map((data, index)=>{
            return(
                <SplideSlide key={index}>
                    <div className='flex flex-col'>
                        <div className='place-self-center'>
                            <img src={data.picture} style={{maxWidth:290, minWidth:290, maxHeight:280, minHeight:280}} alt=""/>
                        </div>
                        <button className='bg-gradient-to-r from-green-900 to-green-800 text-white rounded-lg'>
                                <div className='flex flex-col pb-6 pt-2 px-2'>
                                    <div className='flex flex-row justify-start'>
                                        <span className='text-lg font-bold h-8 w-8 rounded-full bg-green-800 text-white mr-3'>
                                            {data.id}
                                        </span>
                                        <p className='text-lg font-bold'>
                                            {data.caption}
                                        </p>
                                    </div>
                                    <div className='flex flex-col justify-start rounded-md ml-4'>
                                        <p className='text-sm text-gray-200 text-left mt-3'>
                                            {data.subCaption} 
                                        </p>
                                    </div>
                                </div>
                            </button>
                    </div>
                    {/* <div className='flex'>
                        <div className='flex-shrink-0'>
                            <div className='grid grid-cols-1'>
                                <div className='grid grid-cols-1'>
                                    <div className='place-self-center'>
                                        <img src={data.picture} style={{maxWidth:300, maxHeight:500}} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-gradient-to-r from-green-900 to-green-800 text-white rounded-lg w-max-content'>
                                <div className='flex flex-col pb-6 pt-2 px-2'>
                                    <span className='text-lg font-bold h-8 w-8 rounded-full bg-green-800 text-white'>
                                        {data.id}
                                    </span>
                                    <div className='flex flex-col items-start justify-start rounded-md ml-4'>
                                        <p className='text-lg font-bold'>
                                            {data.caption}
                                        </p>
                                        <p className='text-sm text-gray-800'>
                                            {data.subCaption} 
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div> */}
                </SplideSlide>
            )
        })
        return render
    }
    render() {
        return (
            <div className='py-12 bg-white'>
                <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
                    {/* Tulisan How It works */}
                    <div className='text-center'>
                        <p className='text-base leading-6 font-semibold tracking-wide uppercase text-green-900'>
                            How to Use Gaskuy.ID
                        </p>
                    </div>
                    <div className="lg:text-center">
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            Simplicity is a Key to Solve
                        </h3>
                        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                            Dengan Gaskuy.ID Sekarang liburan ga harus ribet dan ga perlu takut lagi. Masukan harga biar kami yang mengatur segalanya. Kan kita teman.
                        </p>
                    </div>
                    <div className='mt-10 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10'>
                        <div className='m-0 place-self-center'>
                            <Splide
                            options={{
                                rewind: true,
                                perPage: 1,
                                perMove: 1,
                                width: 400,
                                arrows: false,
                                focus: 'center',
                            }}
                            >
                                {this.renderHowItWork()}
                            </Splide>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default HowItWork
