import rectangle from "../assets/Rectangle.png";
import googlePlay from "../assets/Google-Play.svg";
import appStore from "../assets/App-Store.svg";


export default function HeroSection() {

  return ( 
    <div className="w-100 items-center border-solid border-gray-950	" > 
      <section id="hero-section" className="flex flex-row items-center text-start justify-center gap-16 flex-wrap lg:flex-nowrap">
      <div className="w-2/3 flex flex-col gap-8">
        <h1 className="">Download Tulum, Start Your Party, Earn Money!</h1>
        <p className="">Get Tulum app, create your account, and discover exciting parties in your city. Host your own events and make money effortlessly. Join the Tulum community today and turn every night into a unforgettable expirience!</p>
        <div className="flex flex-row gap-3 w-full h-20">
          <button>
            <img  src={googlePlay} alt="download on google play button"/></button>      
          <button>
            <img src={appStore} alt="download on app store button"/></button>
        </div>
      </div>
      <div className="lg:w-1/3">
      <img src={rectangle} alt="phone mockup with Tulum login page" />
      </div>
    </section>
   </div>
   
  
  )
}