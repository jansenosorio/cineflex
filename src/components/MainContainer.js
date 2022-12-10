import FilmDate from './FilmDate'
import FilmList from './FilmList'
import SelectSeats from './SelectSeats'
import Resume from './Resume'
import styled from 'styled-components'
import Logo from './Logo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

const MainContainer = () => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/sessoes/:idFilme" element={<FilmDate />} />
          <Route path="/assentos/:idSessao" element={<SelectSeats />} />
          <Route path="/sucesso" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default MainContainer

const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 70px;
  background-color: #c3cfd9;
`
