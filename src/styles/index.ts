import styled from 'styled-components'

export const MainStyles = styled.main`
  display: inline-block;
  margin-top: 2%;
  padding: 0.9375rem;
  position: relative;

  .pokedex {
    width: 100%;
    max-width: 26.5625rem;
  }

  .pokemon-image {
    position: absolute;
    display: none;
    bottom: 55%;
    left: 50%;
    transform: translate(-63%, 20%);
    height: 18%;

    &.active {
      display: block;
    }
  }

  h1 {
    position: absolute;
    font-weight: 600;
    color: #aaa;
    top: 54.5%;
    right: 27%;
    font-size: clamp(0.5rem, 5vw, 1.5625rem);

    .pokemon-name {
      color: #3a444d;
      text-transform: capitalize;
    }
  }

  .form {
    position: absolute;
    width: 65%;
    top: 65%;
    left: 13.5%;

    input {
      width: 100%;
      padding: 4%;
      outline: none;
      border: 0.125rem solid #333;
      border-radius: 0.3125rem;
      font-weight: 600;
      color: #3a444d;
      font-size: clamp(0.5rem, 5vw, 1rem);
      box-shadow: -0.1875rem 0.25rem 0 #888, -0.3125rem 0.4375rem 0 #333;
    }
  }

  .buttons {
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: 65%;
    transform: translate(-57%, 0);
    display: flex;
    gap: 1.25rem;

    button {
      width: 50%;
      padding: 4%;
      border: 0.125rem solid #000;
      border-radius: 0.3125rem;
      font-size: clamp(0.5rem, 5vw, 1rem);
      font-weight: 600;
      color: #fff;
      background-color: #444;
      box-shadow: -0.125rem 0.1875rem 0 #222, -0.25rem 0.375rem 0 #000;

      &:active {
        box-shadow: inset -0.25rem 0.25rem 0 #222;
        font-size: 0.9rem;
      }
    }
  }
`
