import HomeLayout from '../layouts/HomeLayout'
import Image from 'next/image'
import profilePic from '../public/house3.png'
import BigSearch from '../components/search/BigSearch'

export default function Home() {
  return (
    <HomeLayout page_title='Home' page_description="One roof market real estate platform">
      <div className="container items-center mx-auto">
        <div className="absolute right-0 bottom-0 z-10">
          <div className="flex flex-row">
            <div className="w-1/2"></div>
            <Image src={profilePic} className="w-2/3 z-0" alt="Picture of the author" />
          </div>
        </div>
        <div className="min-h-screen flex container">
          <div className="flex md:m-auto p-8 flex-col z-40">
            <p className="lg:text-6xl md:text-4xl text-2xl font-semibold text-blue-900 md:w-2/5 w-4/5 mb-2">Vacations and your home is just a one roof market</p>
            <p className="text-gray-700 text-sm mb-8 md:w-2/5 w-4/5">Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised. 
              It is the basis of all security and about the only indestructible security.</p>
            <>
              <BigSearch/>
            </>
          </div>
        </div>
        <div className="min-h-screen">
          sa
        </div>
      </div>
    </HomeLayout>
  )
}
