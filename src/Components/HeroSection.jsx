import rectangle from "../assets/Rectangle.png";
import googlePlay from "../assets/Google-Play.svg";
import appStore from "../assets/App-Store.svg";


export default function HeroSection() {

  return ( 
   <main className="flex flex-col items-center text-start justify-center mx-16 gap-8 relative">
    <div className="">
    <h1 className="">Download Tulum, Start Your Party, Earn Money!</h1>
    <p>Get Tulum app, create your account, and discover exciting parties in your city. Host your own events and make money effortlessly. Join the Tulum community today and turn every night into a unforgettable expirience!</p>
    <div className="flex flex-row gap-3 w-full h-20">
    <button>
      <img  src={googlePlay} alt="download on google play button"/></button>      
    <button>
      <img src={appStore} alt="download on app store button"/></button>
    </div>
    </div>
    <div className="absolute right-0 margin-">
      <img src={rectangle} alt="phone mockup with Tulum login page" />
    </div>
   </main>
  
  )
}