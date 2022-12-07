import styled from 'styled-components'

const FilmList = () => {
  return (
    <>
      <Title>Selecione o Filme</Title>

      <List>
        <img src="https://789d77d27f49a880d02e-714b7dc0b51e300a567fc89d2a0837e5.ssl.cf1.rackcdn.com/PaginaConteudo/depositphotos46976671xl-2015-copia.jpg"></img>
        <img src="https://789d77d27f49a880d02e-714b7dc0b51e300a567fc89d2a0837e5.ssl.cf1.rackcdn.com/PaginaConteudo/depositphotos46976671xl-2015-copia.jpg"></img>
        <img src="https://789d77d27f49a880d02e-714b7dc0b51e300a567fc89d2a0837e5.ssl.cf1.rackcdn.com/PaginaConteudo/depositphotos46976671xl-2015-copia.jpg"></img>
        <img src="https://789d77d27f49a880d02e-714b7dc0b51e300a567fc89d2a0837e5.ssl.cf1.rackcdn.com/PaginaConteudo/depositphotos46976671xl-2015-copia.jpg"></img>
        <img src="https://789d77d27f49a880d02e-714b7dc0b51e300a567fc89d2a0837e5.ssl.cf1.rackcdn.com/PaginaConteudo/depositphotos46976671xl-2015-copia.jpg"></img>
        <img src="https://789d77d27f49a880d02e-714b7dc0b51e300a567fc89d2a0837e5.ssl.cf1.rackcdn.com/PaginaConteudo/depositphotos46976671xl-2015-copia.jpg"></img>
        <img src="https://789d77d27f49a880d02e-714b7dc0b51e300a567fc89d2a0837e5.ssl.cf1.rackcdn.com/PaginaConteudo/depositphotos46976671xl-2015-copia.jpg"></img>
        <img src="https://789d77d27f49a880d02e-714b7dc0b51e300a567fc89d2a0837e5.ssl.cf1.rackcdn.com/PaginaConteudo/depositphotos46976671xl-2015-copia.jpg"></img>
      </List>
    </>
  )
}

export default FilmList

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

const List = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  padding-bottom: 100px;
  img {
    box-sizing: border-box;
    gap: 20px;
    width: 145px;
    height: 209px;
    padding: 8px;
    margin: 11px 30px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
`
