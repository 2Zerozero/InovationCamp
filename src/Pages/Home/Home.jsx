import React from 'react'
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import Container from '../../components/Container/Container';
import * as S from './style'


function Home() {
    return (
        <S.Layout>

            {/* Header */}
            <Header />
    
            {/* Form */}
            <Form />
    
            {/* Container */}
            <Container />

        </S.Layout>
    )
}

export default Home