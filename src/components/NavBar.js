import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul style={{listStyleType:'none', fontSize:'20px'}} className="d-flex justify-content-evenly bg-warning-subtle p-3">
      <li><Link className='link' to="/">TrendingArticle</Link></li>
      <li><Link className='link' to="/fullStack">Full Stack Development</Link></li>
      <li><Link className='link' to="/dataScience">Data Science</Link></li>
      <li><Link className='link' to="/cyberSecurity">Cyber Security</Link></li>
      <li><Link className='link' to='/digitalMarketing'>DigitalMarketing</Link></li>
    </ul>
  );
}
