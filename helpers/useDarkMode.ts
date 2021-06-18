import { useEffect, useState, ReactElement } from 'react'

interface Props{
}

function useDarkMode(props: Props) {

    const [theme, setTheme] = useState<any>(localStorage.getItem('daypitchtheme'))
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    
    useEffect(() => {
        if (theme === 'null') {
            setTheme('light')
        }else if(theme === 'dark'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
        const root = window.document.documentElement;        

        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('daypitchtheme', theme)
    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}

export default useDarkMode