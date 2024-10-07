export default function Header() {
  const styleButton="px-4 py-2 text-white text-xl rounded-3xl hover:border-transparent"
  return (
    <button className={styleButton} style={{backgroundColor:"var(--secondary)"}}>Join wishlist</button>
  )
}