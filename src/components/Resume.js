import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Resume = props => {
  const seats = JSON.parse(localStorage.getItem('seats'))
  const status = localStorage.getItem('status')

  const backToHome = () => {
    localStorage.clear()
  }

  return (
    <ContainerSuccess>
      <Title status={'200'}>
        {localStorage.getItem('status') === '200'
          ? 'Pedido feito com sucesso!'
          : 'Algo deu errado, favor verificar os dados!'}
      </Title>
      <ContainerMainInfos>
        <FilmInfo data-test="movie-info">
          <h1>Filme e sessão</h1>
          <p>{localStorage.getItem('movie')}</p>
          <p>
            {localStorage.getItem('day')} {localStorage.getItem('hour')}
          </p>
        </FilmInfo>
        <SeatsInfo data-test="seats-info">
          <h1>Ingressos</h1>
          {seats.map(e => (
            <p key={e}>Assento {e}</p>
          ))}
        </SeatsInfo>
        <BuyerInfo data-test="client-info">
          <h1>Comprador</h1>
          <p>Nome: {localStorage.getItem('name')}</p>
          <p>CPF: {localStorage.getItem('cpf')}</p>
        </BuyerInfo>
        <BtnContainer>
          <Link to="/" data-test="go-home-btn">
            <BtnHome onClick={backToHome}>Voltar pra Home</BtnHome>
          </Link>
        </BtnContainer>
      </ContainerMainInfos>
    </ContainerSuccess>
  )
}

export default Resume

const ContainerSuccess = styled.section`
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
`

const ContainerMainInfos = styled.div`
  width: 414px;
  height: auto;
  margin: 0 auto;
`
const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  width: 150px;
  min-height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  color: ${props => (props.status === '200' ? '#247A6B' : 'red')};
`
const FilmInfo = styled.div`
  box-sizing: border-box;
  width: 274px;
  height: 121px;
  padding: 23px;
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #293845;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #293845;
    margin-top: 10px;
    &:nth-child(2) {
      margin-top: 20px;
    }
  }
`

const SeatsInfo = styled.div`
  box-sizing: border-box;
  width: 414px;
  height: auto;
  padding: 23px;
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    padding-top: 20px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #293845;
    margin-top: 10px;
    &:nth-child(2) {
      margin-top: 20px;
    }
  }
`
const BuyerInfo = styled.div`
  box-sizing: border-box;
  width: auto;
  height: auto;
  padding: 23px;
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    padding-top: 20px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #293845;
    margin-top: 10px;
    &:nth-child(2) {
      margin-top: 20px;
    }
  }
`
const BtnHome = styled.button`
  width: 225px;
  height: 42px;
  background-color: #e8833a;
  border-radius: 3px;
  border: none;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  cursor: pointer;
`
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 70px;
`
