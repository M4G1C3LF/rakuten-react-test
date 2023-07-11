import React, { ReactElement } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Container from '../Grid/Container/Container';
import Row from '../Grid/Row/Row';
import './Layout.css';

type LayoutProps = {
    children: ReactElement;
    className?: string;
}

export default (props: LayoutProps) => {
    return (
        <Container className={`${props.className}`}>
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