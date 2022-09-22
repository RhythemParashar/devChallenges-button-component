import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <span className='orange-logo'>Dev</span>
        <span>challenges.io</span>
      </div>
      <div className='links'>
        <h2>Colors</h2>
      </div>
      <div className='links'>
        <h2>Typography</h2>
      </div>
      <div className='links'>
        <h2>Spaces</h2>
      </div>
      <div className='links'>
        <h2>Buttons</h2>
      </div>
      <div className='links active'>
        <h2>Inputs</h2>
      </div>
      <div className='links'>
        <h2>Grids</h2>
      </div>
    </div>
  );
};
export default Navbar;
