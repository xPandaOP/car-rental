import React, { useState } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'


const DarkMode = () => {
    const [theme , setTheme]= useLocalStorage('theme' ? 'dark' :'light')

    const switchTheme = ()=> {
        const newTheme = theme === 'light' ? 'dark': 'light';
        setTheme(newTheme)
    }
  return (
    <div onClick={switchTheme}>
     { theme === 'dark' ? (<BiSolidSun/>) : (<BiSolidMoon/>)}
    </div>
  )
}

export default DarkMode
