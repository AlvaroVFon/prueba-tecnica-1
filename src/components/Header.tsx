interface Link {
  label: string
  url: string
}
const Header = ({ title, links }: { title: string; links?: Link[] }) => {
  return (
    <header className='flex justify-center items-center p-5 bg-[#6374ae] text-white'>
      <h1 className='font-bold text-xl'>{title}</h1>
      <nav>
        {links?.map((link) => (
          <a href={link.url}>{link.label}</a>
        ))}
      </nav>
    </header>
  )
}

export default Header
