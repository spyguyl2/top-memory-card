const Header = ({ score, bestScore }) => {
  return (
    <header>
      <h1>
        How's <em>your</em> memory?!
      </h1>
      <a href="https://www.pexels.com">Photos provided by Pexels</a>
      <div id="scoreBoard">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
};

export default Header;
