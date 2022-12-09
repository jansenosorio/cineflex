import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { key } from 'localforage'

const FilmList = props => {
  const [filmList, setFilmList] = useState([])

  useEffect(() => {
    const promise = axios.get(
      'https://mock-api.driven.com.br/api/v8/cineflex/movies'
    )
    promise.then(elm => {
      setFilmList(elm.data)
    })
    promise.catch(() =>
      console.log('Houve algum erro, favor recarregar a página')
    )
  }, [])

  return (
    <Container>
      <Title>Selecione o Filme</Title>

      <List>
        {filmList.map(elm => (
          <Link to={`/sessoes/${elm.id}`}>
            <div data-test="movie" key={elm}>
              <img src={elm.posterURL}></img>
            </div>
          </Link>
        ))}
      </List>
    </Container>
  )
}

export default FilmList

const Container = styled.section`
  width: 100%;
`

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

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  padding-bottom: 100px;
  justify-content: center;
  div {
    margin: 0 0;
    padding: 0 0;
  }
  img {
    box-sizing: border-box;
    gap: 20px;
    width: 145px;
    height: 209px;
    padding: 8px;
    margin: 11px 30px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    cursor: pointer;
  }
`
