import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toggleTodo, removeTodo } from '../store/actions/todos-actions';
import { selectVisibleTodos } from '../store/selectors/todos-selectors';

export const TodoList = () => {
    const dispatch = useDispatch();
    const { filter } = useParams();
    const todos = useSelector((state) => selectVisibleTodos(state, filter));

    return (
        <ul style={{ listStyleType: 'none' }}>
            {todos.map((todo) => (
                <li key={todo.title}>
                    <input
                        type='checkbox'
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    {todo.title}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        delete
                    </button>
                </li>
            ))}
        </ul>
    );
};
