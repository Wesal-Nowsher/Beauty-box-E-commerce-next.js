const SignInForm=()=>{
    return(
        <section className="image-contaner">
            <div className="container">
                <div className="row">
                    <div className="card card-width">
                        <div className="card-body">
                            <div className="container">
                                <form className="form-signin" role="form">
                                    <h2 className="form-signin-heading">WELCOME BACK!</h2><br/><br/>
                                    <label>User Name/Email</label>
                                    <input type="email" className="form-control" placeholder="John@gmail.com" required="" autofocus=""/><br/>
                                    <label>PASSWORD</label>
                                    <input type="password" className="form-control" placeholder="*******" required=""/><br/>
                                    <label className="checkbox">
                                    <input type="checkbox" value="remember-me"/> Remember me
                                    </label>
                                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </section>
    )
}
export default SignInForm;