import './App.css'

function App() {
  return (
    <div id="container">
      <nav>
        <img src="./assets/logo.svg" alt="RocketShoes" />
        <ul>
          <li>Homem</li>
          <li>Mulher</li>
          <li>Criança</li>
          <li>Customizar</li>
        </ul>

        <div>
          <input type="text" className='search' placeholder="Pesquisar" />
        </div>

        <img src="./assets/icon-bag.svg" alt="Bag" />
      </nav>
    </div>
  )
}

export default App
