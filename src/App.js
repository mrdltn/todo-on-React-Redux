import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import { Filters } from './components/Filters';
import './styles.css';

export default function App() {
    return (
        <div className='App'>
            <h1>Hello Redux</h1>
            <NewTodo />
            <Filters />
            <TodoList />
        </div>
    );
}
