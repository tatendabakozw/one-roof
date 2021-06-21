import React, {ReactElement} from 'react'
import Head from 'next/head'
import HomeNavbar from '../components/nav/HomeNavbar'
import Footer from '../components/nav/Footer'

interface Props{
    children: JSX.Element[] | JSX.Element;
    page_title: string
    page_description?: string
}

function HomeLayout(props: Props):ReactElement {
    return (
        <>
            <Head>
                <title>One Roof Market | {props.page_title}</title>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content={props.page_description} />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <body>
                <header className="bg-green-600">
                    <HomeNavbar/>
                </header>
                <main className="min-h-screen">
                    {props.children}
                </main>

                <footer className={`footer`}>
                    {/* <Footer/> */}       
                </footer>
            </body>
        </>         
    )
}

export default HomeLayout

