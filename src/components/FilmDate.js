import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const FilmDate = props => {
  const { filmID } = useParams()
  const [daysOfSession, setDaysOfSession] = useState([])
  const [film, setFilm] = useState([])

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmID}/showtimes`
    )
    promise.then(elm => {
      setDaysOfSession(elm.data.days)
      setFilm(elm.data)
    })
  }, [])

  return (
    <>
      <Title>Selecione o horário</Title>
      {daysOfSession.map(elm => (
        <BoxDateAndHours key={elm.id} data-test="movie-day">
          <p>
            {elm.weekday} - {elm.date}
          </p>
          {elm.showtimes.map(elm => (
            <Link to={`/select-seats/${elm.id}`}>
              <button key={elm.id} data-test="showtime">
                {elm.name}
              </button>
            </Link>
          ))}
        </BoxDateAndHours>
      ))}
      <Footer data-test="footer">
        <div>
          <img src={film.posterURL}></img>
        </div>
        <div>
          <p>{film.title}</p>
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
