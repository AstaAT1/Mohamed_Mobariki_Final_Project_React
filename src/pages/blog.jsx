import Footer from '../components/footer'
import Navbar from '../components/navbar'
import images from '../constant/image'

 function Blog() {
  return (
    <div>
        <Navbar/>
            <div>
     <div className="relative">
        <img src={images.banner} alt="" className="w-full h-[280px] object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl font-bold tracking-widest">
           NEWS
          </h1>
    
        </div>
      </div>
            </div>
            <Footer/>
    </div>

  )
}
export default Blog
