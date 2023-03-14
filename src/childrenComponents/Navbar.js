import Logo from '../assets/img/Group 1.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <section className="img">
        <img src={Logo} alt="Logo Website" />
        <a href="#" className="Logo">
          League Of Legends
        </a>
      </section>
      <ul className="header-list">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Learn</a>
        </li>
        <li>
          <a href="">Champions</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
