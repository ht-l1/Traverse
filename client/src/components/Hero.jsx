import React from 'react'

export const Hero = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img
                src="https://images.unsplash.com/photo-1531951286638-d1b6cdae30c9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt='/'
                className='w-full h-full object-cover'
            />
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                    <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                    <h2 className='text-4xl py-4 italic'>With Traverse</h2>
                    <p>Unlock your next great escape! Dive into a world of wanderlust, where adventure meets simplicity. Your journey starts here—easy, exciting, and oh-so-fun. Let's make memories together!</p>
                </div>
            </div>
        </div>
    )
}

export default Hero