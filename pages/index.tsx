import HomeLayout from '../layouts/HomeLayout'
import Image from 'next/image'
import profilePic from '../public/house3.png'
import BigSearch from '../components/search/BigSearch'

export default function Home() {
  return (
    <HomeLayout page_title='Home' page_description="One roof market real estate platform">
      <div className="container items-center mx-auto">
        <div className="absolute h-screen right-0 z-10">
          <div className="flex flex-row">
            <div className="w-1/2"></div>
            <Image src={profilePic} className="w-2/3 z-0" alt="Picture of the author" />
          </div>
        </div>
        <div className="min-h-screen flex container">
          <div className="flex m-auto flex-col z-40">
            <p className="text-6xl font-semibold text-blue-900 w-2/5 mb-2">Vacations and your home is just a one roof market</p>
            <p className="text-gray-700 text-sm mb-8 w-2/5">Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised. 
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
