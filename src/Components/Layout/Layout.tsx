import React, { ReactElement } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Container from '../Grid/Container/Container';
import Row from '../Grid/Row/Row';
import './Layout.css';

type LayoutProps = {
    children: ReactElement;
}

export default (props: LayoutProps) => {
    return (
        <Container>
            <Row>
                <div>
                    <Header />
                    <div className='layout-content'>
                        {props.children}
                    </div>
                    <Footer />
                </div>
            </Row>
        </Container>
    );
}