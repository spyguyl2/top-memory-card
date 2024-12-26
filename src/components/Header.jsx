const Header = ({ score, bestScore }) => {
  return (
    <header>
      <h1>
        How&apos;s <em>your</em> memory?!
      </h1>
      <a href="https://giphy.com/">Powered by GIPHY!</a>
      <div id="scoreBoard">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
};

export default Header;
