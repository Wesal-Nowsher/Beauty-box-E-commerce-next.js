import Head from 'next/head';
import Footer from '../footer/index';
const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Beauty Box</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://fonts.googleapis.com/css?family=Raleway:400,800" rel="stylesheet"/>>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"/>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"/>           
            </Head>
            {props.children}
            <Footer/>
        </div>
    )
};
export default Layout;