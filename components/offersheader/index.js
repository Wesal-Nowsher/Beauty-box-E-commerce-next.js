import Link from 'next/link';
export const OffersHeader = () => {
    return (
        <div>
    <div className="overlay"></div>
        <section className="hero-2">
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
				      <Link href="/index"><a className="nav-link" >HOME</a></Link>
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
				      <a className="nav-link" href="#"><img src="./static/images/Cart-white.png"/></a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" href="#"><img src="./static/images/User-white.png"/></a>
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
			<div className="col-md-12">
				<div className="content-container center-align">
					<h1>SPECIAL OFFERS</h1>
				</div>
			</div>
		</div>
	</div>
	
</section>
</div>
    )
}