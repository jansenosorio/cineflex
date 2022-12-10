import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const SelectSeats = props => {
  const { idSessao } = useParams()
  const [seatArrays, setSeatArray] = useState([])
  const [isClicked, setIsClicked] = useState([])

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    )
    promise.then(elm => setSeatArray(elm.data.seats))
    promise.catch(err => console.log(err))
  }, [])

  const handleClick = (e, btnAvlb) => {
    if (!isClicked.includes(e)) {
      if (btnAvlb === false) {
        alert('Este assento já foi selecionado, escolha outro.')
      } else {
        const newIsClicked = [...isClicked, e]
        setIsClicked(newIsClicked)
      }
    } else {
      const newArrIsClicked = [...isClicked]
      let newArr = []
      newArrIsClicked.forEach(elm => {
        if (e !== elm) {
          newArr = [...newArr, elm]
        }
      })
      setIsClicked(newArr)
    }
  }
  return (
    <>
      <Title>{'Selecione o(s) assento(s)'}</Title>
      <ContainerSeats>
        {seatArrays.map(elm => (
          <Seats
            key={elm.id}
            background={
              isClicked.includes(elm.name)
                ? '#1AAE9E'
                : elm.isAvailable === true
                ? '#C3CFD9'
                : '#FBE192'
            }
            onClick={() => handleClick(elm.name, elm.isAvailable)}
            data-test="seat"
          >
            <button>{elm.name}</button>
          </Seats>
        ))}
      </ContainerSeats>
      {/* <UserForm>
        <Name></Name>
        <CPF></CPF>
      </UserForm>
      <BtnReserveSeats></BtnReserveSeats>
      <Footer></Footer> */}
    </>
  )
}

export default SelectSeats

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
const ContainerSeats = styled.section`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  justify-content: center;
  gap: 12px;
`

const Seats = styled.div`
  margin: 0 auto;

  button {
    width: 26px;
    height: 26px;
    border: 2px solid;
    border-color: ${props => {
      switch (props.background) {
        case '#1AAE9E':
          return '#0E7D71'
        case '#FBE192':
          return '#F7C52B'
        default:
          return '#808F9D'
      }
    }};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 11px;
    background-color: ${props => props.background};
    cursor: pointer;
  }
  button:disabled {
    color: black;
  }
`
