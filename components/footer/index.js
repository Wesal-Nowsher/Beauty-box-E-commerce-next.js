import Link from 'next/link';
const Footer = () => {
    return (
        <div>
            <section className="footer-section">
	        <div className="container">
		        <div className="row">
			        <div className="social-icons">
				        <div className="footer-logo">
                            <img src="./static/images/Logo.png"/>
				        </div>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                            <Link href="/home"><a className="nav-link" >HOME</a></Link>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">GIFTS</a>
                            </li>
                            <li className="nav-item">
                            <Link href="/offers"><a className="nav-link">OFFERS</a></Link>
                            </li>
                            
                        </ul>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                            <a className="nav-link" href="#"><img src="./static/images/Face-book.png"/></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><img src="./static/images/Twitter.png"/></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><img src="./static/images/Instagram.png"/></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><img src="./static/images/Invision.png"/></a>
                            </li>
                        </ul><br/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer">
                <p>Copyright 2018 | ALL RIGHTS RESERVED</p>
            </div>  
        </div>
    )
}
export default Footer;