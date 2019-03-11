import React, {Component} from 'react';
import '../style.css';
import Layout from '../components/layout';
import { HeaderOne } from '../components/frontPageHeader';
import { ContactUs } from '../components/contactUsForm';
import Refer from '../components/refer';
import Popular from '../components/popular';
import Services from '../components/services';
import Cards from '../components/cards';
import Subscribe from '../components/subscribe';
import BeautyfulBox from '../components/beautyfulBox';
import Icons from '../components/icons';
class Home extends Component {
    render(){
        return(
            <Layout>
                <HeaderOne/>
                <Icons/>
                <BeautyfulBox/>
                <Subscribe/>
                <Cards/>
                <Services/>
                <Popular/>
                <Refer/>
                <ContactUs/>
            </Layout>
        )
    }
}
export default Home;