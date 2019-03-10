import Link from 'next/link';
const Header =() =>{
    return(
        <section className="hero1 container-fluid">
            <div className="container">
                <div className="row sign-header">
                    <div className="col-md-3">
                        <div className="logo">
                            <img src="./static/images/Logo.png"/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                            <Link href="/index"><a className="nav-link">HOME</a></Link>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">GIFTS</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">OFFERS</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa fa-shopping-cart"></i></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa fa-user"></i></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><img src="./static/images/Flag'.png"/>&nbsp;<i className="fa fa-chevron-down"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Header;