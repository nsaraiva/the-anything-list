
import SnacklstController from './controllers/SnacklstController.js';
import SnacklstView from './views/SnacklstView.js';

function App() {
  
  return (
    <div className="App">
      <SnacklstController>
        <SnacklstView />
      </SnacklstController>
    </div>
  );
}

export default App;
