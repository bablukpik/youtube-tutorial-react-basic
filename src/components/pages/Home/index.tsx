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
        <li>
          <Link to="use-effect">UseEffect Hook</Link>
        </li>
        <li>
          <Link to="use-context">Use Context Hook</Link>
        </li>
        <li>
          <Link to="use-reducer">Use Reducer Hook</Link>
        </li>
        <li>
          <Link to="use-transition">Use Transition Hook</Link>
        </li>
        <li>
          <Link to="custom-hook">Custom Hook</Link>
        </li>
        <li>
          <Link to="render-props">Render Props</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
