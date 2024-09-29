import { links } from '../data';

const Navbar = () => {
  return (
    <nav className="bg-purple-300">
  <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:justify-center sm:py-8">
    {/* <h2 className='text-3xl font-bold'>
      Web<span className='text-emerald-600'>Dev</span>
    </h2> */}
    <div className="flex gap-x-8 justify-center">
      {links.map((link) => {
        const { id, href, text } = link;
        return (
          <a
            key={id}
            href={href}
            className="capitalize text-lg tracking-wide bg-purple-300 text-white px-4 py-2 rounded-lg hover:bg-yellow-200 hover:text-purple-700 transform hover:scale-105 transition-transform duration-300"
          >
            {text}
          </a>
        );
      })}
    </div>
  </div>
</nav>
  );
};
export default Navbar;
