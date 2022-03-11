import './App.css';
import Title from './Title.js';
import TaskForm from './TaskForm.js';
import TasksList from './TasksList';

function App() {
  return (
    <div className="App">
		<Title />		
		<TaskForm />
		<TasksList />
    </div>
  );
}

export default App;
