import Link from 'next/link';
const SignUpForm=()=>{
    return(
        <section className="image-contaner">
            <div className="container">
                <div className="row">
                    <div className="card card-width">
                        <div className="card-body">
                            <div className="container">
                                <form className="form-signin" role="form">
                                    <h2 className="form-signin-heading">SIGN UP</h2><br/><br/>
                                    <label>User Name</label>
                                    <input type="text" className="form-control" placeholder="John" required="" autofocus=""/><br/>
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="John@gmail.com" required="" autofocus=""/><br/>
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="*******" required=""/><br/>
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="*******" required=""/><br/>
                                    {/* <label className="checkbox">
                                    <input type="checkbox" value="remember-me"/> Remember me
                                    </label> */}
                                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                                    <p className="sign-color">Already have Account, <Link href="/index"><a>Sign in.</a></Link></p>
                                </form>
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </section>
    )
}
export default SignUpForm;