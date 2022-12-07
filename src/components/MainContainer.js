import FilmDate from './FilmDate'
import FilmList from './FilmList'
import SelectSeats from './SelectSeats'
import Resume from './Resume'
import styled from 'styled-components'
import Logo from './Logo'

const MainContainer = () => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      {/* <FilmList /> */}
      <FilmDate />
      {/* <SelectSeats />
      <Resume /> */}
    </Container>
  )
}

export default MainContainer

const Container = styled.section`
  width: 100vw;
  height: 100vh;
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
  margin: 0 auto;
`
