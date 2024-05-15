import { API } from '@stoplight/elements';

import '@stoplight/elements/styles.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <API apiDescriptionUrl="https://raw.githubusercontent.com/robin-collins/ppdb/main/src/openapi.yaml" />
    </div>
  );
}

export default App;
