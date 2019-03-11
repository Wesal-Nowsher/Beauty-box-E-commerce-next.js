import Link from 'next/link';
export const HeaderOne = () => {
    return (
        <section className="hero">
	<div className="container">
		<div className="row header">
			<div className="col-md-3">
				<div className="logo">
					<img src="./static/images/Logo.png"/>
				</div>
		    </div>
			<div className="col-md-9">
				 <ul className="nav justify-content-end">
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
				    <li className="nav-item">
				      <a className="nav-link" href="#"><img src="./static/images/Cart.png"/></a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" href="#"><img src="./static/images/User.png"/></a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" href="#"><img src="./static/images/Flag'.png"/>&nbsp;<i className="fa fa-chevron-down"/></a>
				    </li>
				 </ul>
			</div>
		</div>
	</div>
	<div className="container">
		<div className="row head-text">
			<div className="col-md-6">
				<div className="image-container">
					<img src="./static/images/Gift.png"/>
				</div>
			</div>
			<div className="col-md-6">
				<div className="content-container">
					<h3>Find and Book</h3>
					<strong>BEAUTY FULL BOX</strong>
					<h2>ANYWHERE, ANYTIME</h2>
					<button className="btn pink-button">ORDER NOW</button>
				</div>
			</div>
		</div>
	</div>
	
</section>
    )
}