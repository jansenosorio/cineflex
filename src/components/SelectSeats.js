import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import Forms from './Form'

const SelectSeats = props => {
  const { idSessao } = useParams()
  const [seatArrays, setSeatArray] = useState([])
  const [isClicked, setIsClicked] = useState([])
  const [filmInfo, setFilmInfo] = useState([])
  const [filmDate, setFilmDate] = useState([])
  const [filmHour, setFilmHour] = useState([])
  const [seatId, setSeatId] = useState([])

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    )
    promise.then(elm => {
      setSeatArray(elm.data.seats)
      setFilmInfo(elm.data.movie)
      setFilmDate(elm.data.day)
      setFilmHour(elm.data.name)
    })
    promise.catch(err => console.log('Deu algo errado, favor verificar'))
  }, [])

  const handleClick = (e, btnAvlb, elmID) => {
    if (!isClicked.includes(e)) {
      if (btnAvlb === false) {
        alert('Este assento já foi selecionado, escolha outro.')
      } else {
        const newIsClicked = [...isClicked, e]
        setIsClicked(newIsClicked)
        const newSeatId = [...seatId, elmID]
        setSeatId(newSeatId)
        localStorage.setItem('seats', JSON.stringify(newIsClicked))
        localStorage.setItem('seatsid', JSON.stringify(newSeatId))
      }
    } else {
      const newArrIsClicked = [...isClicked]
      let newArr = []
      const ArrSeatId = [...seatId]
      let newArrSeatId = []
      newArrIsClicked.forEach(elm => {
        if (e !== elm) {
          newArr = [...newArr, elm]
        }
      })

      ArrSeatId.forEach(elm => {
        if (elmID !== elm) {
          newArrSeatId = [...newArrSeatId, elm]
        }
      })
      setIsClicked(newArr)
      setSeatId(newArrSeatId)
      localStorage.setItem('seats', JSON.stringify(newArr))
      localStorage.setItem('seatsid', JSON.stringify(newArrSeatId))
    }

    localStorage.setItem('movie', filmInfo.title)
    localStorage.setItem('day', filmDate.date)
    localStorage.setItem('weekday', filmDate.weekday)
    localStorage.setItem('hour', filmHour)
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
            onClick={() => handleClick(elm.name, elm.isAvailable, elm.id)}
            data-test="seat"
          >
            <button>{elm.name}</button>
          </Seats>
        ))}
      </ContainerSeats>
      <SubtitleSeats>
        <Selected>
          <button></button>
          Selecionado
        </Selected>
        <Available>
          <button></button>
          Disponível
        </Available>
        <Unavailable>
          <button></button>
          Indisponível
        </Unavailable>
      </SubtitleSeats>
      <Forms />
      <Footer data-test="footer">
        <div>
          <img src={filmInfo.posterURL}></img>
        </div>
        <div>
          <p>{filmInfo.title}</p>
          <p>
            {filmDate.weekday} - {filmHour}
          </p>
        </div>
      </Footer>
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
  height: auto;
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
    border: 1px solid;
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
const SubtitleSeats = styled.div`
  max-width: 414px;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    color: #4e5a65;
    button {
      width: 25px;
      height: 25px;
      margin-bottom: 14px;
      border-radius: 50%;
    }
  }
`
const Selected = styled.div`
  button {
    border: 1px solid #0e7d71;
    background-color: #1aae9e;
  }
`
const Available = styled.div`
  button {
    border: 1px solid #7b8b99;
    background-color: #c3cfd9;
  }
`
const Unavailable = styled.div`
  button {
    border: 1px solid #f7c52b;
    background-color: #fbe192;
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
    font-size: 20px;
    line-height: 30px;
    color: #293845;
  }
`
