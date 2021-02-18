import React, { Component } from 'react'

export class Problems extends Component {
    render() {
        return (
         <div className="py-12 bg-white">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className='text-center'>
      <p className="text-base leading-6 font-semibold tracking-wide uppercase text-green-900">PROBLEMS</p>
    </div>
    <div className="lg:text-center">
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Your Problems are Our Problems too
      </h3>
      <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
        Kami Sadar bahwa ada beberapa masalah yang muncul sebelum, saat, dan setelah liburan yang harus diselesaikan agar liburan semakin asik.  
      </p>
    </div>
    <div className="mt-10">
      <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <li>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-white bg-green-900">
                {/* Heroicon name: globe-alt */}
                <i className="fas fa-hand-holding-usd"></i>
                
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Takut Over Budget</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Terkadang ekspetasi tidak sesuai realita, budget yang sudah diatur sedemikian rupa ternyata jadi berlebih, karna ada beberapa biaya yang tidak diperhitungkan namun cukup berpengaruh.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-white bg-green-900">
                {/* Heroicon name: scale */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Binggung Milih Destinasi Liburan</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Liburan Ke kota yang belum pernah kita kunjungi sebelumnya menjadi batasan untuk explore tempat-tempat disana. Tenang sekarang ada kita yang bantu kamu untuk liburan ke tempat-tempat yang sesuai keinginan kamu tanpa ribet nyari informasi terlebih dahulu.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-white bg-green-900">
                {/* Heroicon name: lightning-bolt */}
                <i className="fas fa-user-shield"></i>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Merasa Ga Aman Ketika Liburan</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Keamanan dan Kenyamanan Anda adalah hal terpenting untuk kami, dengan Gaskuy.ID liburan Anda pasti akan lebih bahagia tanpa harus <i>overthinking</i> di tempat liburan.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-white bg-green-900">
                {/* Heroicon name: annotation */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Males Nyusun Intinerary</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Sulitnya nyusun itinerary dengan segala keterbatasan dan perbedaan informasi menjadi alasan orang untuk menunda liburannya. Sekarang kamu bisa atur liburan mu sesuai dengan budget dan aktivitas liburannya.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

          
        )
    }
}

export default Problems
