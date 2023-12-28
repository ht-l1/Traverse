import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700'>Send us a message</h2>
            <p className='text-center text-gray-700 py-2'>We're standing by!</p>
            <div className='grid md:grid-cols-2'>
                <img
                    src="https://images.unsplash.com/photo-1452772783921-a4e5de72b718?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="/"
                    className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
                />
                <form>
                    <div className='grid grid-cols-2'>
                        <input className='border m-2 p-2' type="text" placeholder='First Name' />
                        <input className='border m-2 p-2' type="text" placeholder='Last Name' />
                        <input className='border m-2 p-2' type="email" placeholder='Email' />
                        <input className='border m-2 p-2' type="tel" placeholder='Phone' />
                        <input className='border col-span-2 p-2 m-2' type="text" placeholder='Address' />
                        <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10" placeholder='Message'></textarea>
                        <button className='col-2-span m-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact