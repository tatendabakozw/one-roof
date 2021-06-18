import Head from 'next/head'
import HomeNavbar from '../components/nav/HomeNavbar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Boilerplate for next app with tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <HomeNavbar/>
      </header>

      <main className="min-h-screen">
        <p>The rest of the code goes here</p>
      </main>

      <footer className={`footer`}>
        <p>The footer</p>
      </footer>
    </div>
  )
}
