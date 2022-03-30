import { useRef } from "react";
import Draggable from "./lib/Draggable";
import "./index.css";

function App({ callback }) {
  const handle = useRef(null);
  return (
    <div ref={callback}>
      <Draggable handleRef={handle} onMove={(x, y) => console.log(x, y)}>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "royalblue",
          }}
        >
          <button ref={handle}>Move</button>
        </div>
      </Draggable>
    </div>
  );
}

export default App;
