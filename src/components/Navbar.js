// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div style={{ backgroundColor: "black",fontSize:"x-large" }}>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "14px 140px",
          }}
        >
          <Link className='text-decoration-none' to="/"><div>Provis</div></Link>
          <Link className='text-decoration-none' to="/cart"><div>Cart</div></Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
