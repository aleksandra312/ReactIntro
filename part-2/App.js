const App = () => (
  <div>
    <Tweet
      username="lola"
      name="Kate"
      date="11-09-2021"
      message="Hello there!"
    />
    <Tweet
      username="stevens"
      name="John"
      date="11-09-2021"
      message="Nice to meet you."
    />
    <Tweet username="johnny" name="Valery" date="11-09-2021" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
