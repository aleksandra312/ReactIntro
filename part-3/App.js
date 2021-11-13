const App = () => (
  <div>
    <Person name="John" age={16} hobbies={["piano", "reading", "theater"]} />
    <Person name="Mary" age={31} hobbies={["movies", "board games"]} />
    <Person name="Emma" age={19} hobbies={["cooking", "books"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
