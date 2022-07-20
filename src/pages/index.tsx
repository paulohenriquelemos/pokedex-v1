import { useState, FormEvent } from 'react'

import axios from 'axios'

import { MainStyles } from '../styles'

let nomePokemon = ''
export function Home() {
  const [pokemonImage, setPokemonImage] = useState(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif'
  )
  const [pokemonNumber, setPokemonNumber] = useState(1)
  const [pokemonName, setPokemonName] = useState('bulbasaur')
  const [inputPokemonText, setInputPokemonText] = useState('')

  async function fetchpokemon(event: FormEvent | void) {
    event?.preventDefault()
    if (nomePokemon.length !== 0) {
      const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`
      await axios
        .get(url)
        .then((response) => {
          setPokemonImage(
            response?.data['sprites']['versions']['generation-v'][
              'black-white'
            ]['animated']['front_default']
          )
          setPokemonNumber(response?.data.id)
          setPokemonName(response?.data.name)
          setInputPokemonText('')
          nomePokemon = response?.data.id
        })
        .catch(() => {
          setPokemonImage('')
          setPokemonNumber(0)
          setPokemonName('Não encontrado')
          setInputPokemonText('')
          nomePokemon = '0'
        })
    }
  }

  function handlePrevButton() {
    if (pokemonNumber > 1) {
      nomePokemon = (pokemonNumber - 1).toString()
      fetchpokemon()
    }
  }
  function handleNextButton() {
    nomePokemon = (pokemonNumber + 1).toString()
    fetchpokemon()
  }

  return (
    <MainStyles>
      <img src="./images/pokedex.png" alt="Pokedex" className="pokedex" />
      <img
        src={`${pokemonImage}`}
        alt="Pokemon"
        className={`pokemon-image ${
          pokemonImage === '' || pokemonImage === null ? '' : 'active'
        }`}
      />
      <h1>
        <span>{pokemonNumber !== 0 ? pokemonNumber : ''} - </span>
        <span className="pokemon-name">{pokemonName}</span>
      </h1>
      <form className="form" onSubmit={fetchpokemon}>
        <input
          type="search"
          className="input-search"
          placeholder="Nome ou número"
          value={inputPokemonText}
          onChange={(event) => {
            setInputPokemonText(event.target.value)
            nomePokemon = event.target.value
          }}
          required
        />
      </form>
      <div className="buttons">
        <button className="button btn-prev" onClick={handlePrevButton}>
          Prev &lt;
        </button>
        <button className="button btn-next" onClick={handleNextButton}>
          Next &gt;
        </button>
      </div>
    </MainStyles>
  )
}
