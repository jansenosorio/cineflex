import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Forms = props => {
  const [name, setName] = useState('')
  const [CPF, setCPF] = useState('')

  const handleClick = () => {}

  return (
    <MyForm>
      <form onSubmit={handleClick}>
        <label>
          Nome do Comprador:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Insira seu nome..."
            data-test="client-name"
          />
        </label>
        <label>
          CPF do Comprador:
          <input
            type="text"
            value={CPF}
            onChange={e => setCPF(e.target.value)}
            placeholder="Insira seu CPF..."
            data-test="client-cpf"
          />
        </label>
        <Link to={`/sucesso`}>
          <input
            type="submit"
            value="Reservar assento(s)"
            data-test="book-seat-btn"
          ></input>
        </Link>
      </form>
    </MyForm>
  )
}

export default Forms

const MyForm = styled.section`
  max-width: 414px;
  box-sizing: content-box;
  height: auto;
  font-family: 'Roboto', sans-serif;
  color: #293845;
  font-size: 18px;

  form {
    display: flex;
    flex-direction: column;
    margin: 24px 24px;
    label {
      display: flex;
      flex-direction: column;
      input {
        width: 320px;
        height: 51px;
        margin-bottom: 7px;
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        &::placeholder {
          font-family: 'Roboto', sans-serif;
          font-style: italic;
          color: #afafaf;
          font-size: 18px;
          padding-left: 18px;
        }
      }
      &:nth-child(2) {
        margin-bottom: 50px;
      }
    }
    a {
      margin: 0 auto;
      input {
        width: 225px;
        height: 42px;
        margin: 0 auto;
        background: #e8833a;
        border-radius: 3px;
        border: none;
        font-family: 'Roboto', sans-serif;
        color: white;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
`