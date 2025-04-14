import React from 'react'

const Form = () => {
  return (
    <form className='w-full  mx-auto flex flex-col lg:flex-row  gap-4 p-2 lg:items-center lg:justify mb-4' >
        <input 
        type="text" 
        className='border-2 h-10 p-2 lg:w-1/2'
        placeholder='enetr a top text'
        />
        <input 
        type="text"
        className='border-2 h-10 p-2 lg:w-1/2'
        placeholder='enetr a bottom text' 
        />
    </form>
  )
}

export default Form