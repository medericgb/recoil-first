import "./styles.css";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { inputState, alphaState, countState } from "./atoms/atoms";

export default function App() {
  const [count, setCount] = useRecoilState(countState);
  const alpha = useRecoilValue(alphaState);
  const reset = useResetRecoilState(countState);

  const [input, setInput] = useRecoilState(inputState);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <p>Count: {count}</p>
        <p>Alpha: {alpha}</p>
        <p>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </p>
        <div>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => reset()}>Reset</button>
        </div>
      </div>
    </div>
  );
}
