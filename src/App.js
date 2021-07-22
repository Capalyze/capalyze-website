import iPhoneBezel from "./iPhone.svg";

function App() {
  return (
    <div className="app-container">
      <section className="lead" style={{ backgroundImage: `url(${iPhoneBezel})`}}>
        <h1 className="headlinetype">Capalyze. <br />The future of trading.</h1>
        <h4 className="bodytype">Coming this fall.</h4>
        <div className="appstore">Download</div>
      </section>
    </div>
  );
}

export default App;
