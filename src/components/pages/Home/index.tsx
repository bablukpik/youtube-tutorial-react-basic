import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Topics with Examples</h2>
      <ul>
        <li>
          <Link to="props-state-example">Props and State Part-1</Link>
        </li>
        <li>
          <Link to="props-state-example2">Props and State Part-2</Link>
        </li>
        <li>
          <Link to="props-state-example3">Props and State Part-3</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
