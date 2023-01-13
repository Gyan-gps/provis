// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div style={{ backgroundColor: "GrayText" }}>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "14px 140px",
          }}
        >
          <Link to="/"><div>Provis</div></Link>
          <Link to="/cart"><div>Cart</div></Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
