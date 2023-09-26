import React from 'react'
import Nav from '../../components/Nav'
import Taps from '../../components/Taps/Taps'
import * as S from './style'

function Home() {
    return (
        <S.Wrap>
            <Nav />
            <Taps />
        </S.Wrap>
    )
}

export default Home