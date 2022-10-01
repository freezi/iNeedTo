const Navbar = ({ title }) => {
  return (
    <header>
      <nav className="navbar justify-center bg-gradient-to-r from-primary to-secondary text-primary-content shadow-md">
        <h1 className="btn btn-ghost normal-case text-xl">{title}</h1>
      </nav>
    </header>
  );
};
export default Navbar;
