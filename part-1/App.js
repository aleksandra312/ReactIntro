const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Sasha" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
