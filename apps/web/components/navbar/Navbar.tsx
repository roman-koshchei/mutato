import { GitHubLink, NpmLink } from './NavLinks';

const Navbar = () => (
  <nav className='flex between'>
    <h1>MUTATO</h1>

    <div className='flex gap-3'>
      <GitHubLink />
      <NpmLink />
    </div>
  </nav>
)

export { Navbar }