import imagen from './assets/img/image.jpg'

function Gabriel() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={imagen} className="App-logo" alt="logo" />
          <h1>
             SIGANME EN INSTAGRAM
          </h1>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=Uo-ZphDU06Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
  export default Gabriel;
  