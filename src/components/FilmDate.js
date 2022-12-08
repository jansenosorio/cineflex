import styled from 'styled-components'

const FilmDate = () => {
  return (
    <>
      <Title>Selecione o horário</Title>
      <BoxDateAndHours>
        <p>Quinta-feira - 24/06/2021</p>
        <button>15:00</button>
        <button>19:00</button>
      </BoxDateAndHours>
      <BoxDateAndHours>
        <p>Quinta-feira - 24/06/2021</p>
        <button>15:00</button>
        <button>19:00</button>
      </BoxDateAndHours>
      <Footer>
        <div>
          <img src="https://789d77d27f49a880d02e-714b7dc0b51e300a567fc89d2a0837e5.ssl.cf1.rackcdn.com/PaginaConteudo/depositphotos46976671xl-2015-copia.jpg"></img>
        </div>
        <div>
          <p>Enola Holmes</p>
        </div>
      </Footer>
    </>
  )
}

export default FilmDate

const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  width: 100%;
  min-height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BoxDateAndHours = styled.div`
  width: 90%;
  min-height: 110px;
  margin-left: 23px;
  margin-top: 23px;

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 22px;
  }

  button {
    width: 83px;
    height: 43px;
    background: #e8833a;
    border: none;
    border-radius: 3px;

    font-family: 'Roboto', sans-serif;
    color: white;
    font-size: 18px;
    font-weight: 400;
    margin-right: 8px;
  }
`
const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 116px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  display: flex;
  align-items: center;
  gap: 14px;
  img {
    box-sizing: border-box;
    width: 64px;
    height: 89px;
    margin-left: 23px;
    padding: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    background-color: #ffffff;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`
