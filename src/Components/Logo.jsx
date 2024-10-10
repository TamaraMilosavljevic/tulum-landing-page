import logo from '@/assets/logo.svg';

export default function Logo(){
  return(
    <div className='flex flex-row gap-2 justify-start items-center '>
      <img src={logo} className='h-2/3' alt="unicorn wearing party glasses" />
      <p className="text-3xl font-bold" style={{color: 'var(--text-violet)'}}>Tulum</p>
    </div>
    
    
  )
};