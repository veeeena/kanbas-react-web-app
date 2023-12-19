import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };        
    const removeTodo = async (todo) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };        
    const updateTitle = async () => {
        const response = await axios.get(
          `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const deleteTodo = async (todo) => {
        // Extra Credit
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
          } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);          }      
    };     
    const updateTodo = async () => {
        // Extra Credit
        try {
            const response = await axios.put(
                `${API}/${todo.id}`, todo);
              setTodos(todos.map((t) => (
                t.id === todo.id ? todo : t)));
              setTodo({});
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };           
    useEffect(() => {
      fetchTodos();
    }, []);
  
  
    return (
      <div>
        <h3>Working with Arrays</h3>
        <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
        />
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`}
            className="btn btn-primary me-2">
            Delete Todo with ID = {todo.id}
        </a>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input
            className="form-control"
            value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: e.target.value })}
        />
        <a href={`${API}/${todo.id}`}
            className="btn btn-primary me-2">
            Get Todo by ID
        </a>
        <h3>Filtering Array Items</h3>
        <a href={`${API}/?completed=true`}
            className="btn btn-primary me-2" >
            Get Completed Todos
        </a>
        <h4>Creating new Items in an Array</h4>
        <a href={`${API}/create`}
            className="btn btn-primary me-2">
            Create Todo
        </a>

        <h3> Updating an Item in an Array </h3>
        <input
            value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}
            className="form-control mt-4 mb-1"
            type="text"
        />
        <a
            href={`${API}/${todo.id}/title/${todo.title}`}
            className="btn btn-primary me-2 mb-3" >
            Update Title to {todo.title}
        </a>
            
        <h5> Extra Credit </h5>
        <input
            value={todo.description}
            onChange={(e) => setTodo({
            ...todo, description: e.target.value })}
            className="form-control mb-1"
            type="text"
        />
        <a
            href={`${API}/${todo.id}/description/${todo.description}`}
            className="btn btn-primary me-2" >
            Update Description to {todo.description}
        </a>
        <br />
        <input
            value={todo.completed}
            onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
            type="checkbox"
        />
        <a
            href={`${API}/${todo.id}/completed/${todo.completed}`}
            className="btn btn-primary me-2 mt-2" >
            Update Completed
        </a>

        <hr />
        <h2>To-Do List</h2>
        <div className="form-control my-3">
            <div className="mt-2">
                <input value={todo.id}
                    className="form-control"
                    onChange={(e) => setTodo({ ...todo,
                    id: e.target.value })} />
            </div>
            <div>
                <input value={todo.title}
                    className="form-control"
                    onChange={(e) => setTodo({ ...todo,
                    title: e.target.value })} />
            </div>
            <div>
                <textarea
                    className="form-control"
                    onChange={(e) => setTodo({ ...todo,
                    description: e.target.value })}
                    value={todo.description} type="text"
                />
            </div>
            <div>
                <input
                    className="form-control"
                    onChange={(e) => setTodo({
                    ...todo, due: e.target.value })}
                    value={todo.due} type="date"
                />
            </div>
            <div>
                <label>
                    <input
                    className="form-check-input m-1 p-1"
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked })}
                    value={todo.completed} type="checkbox"
                    />
                    Completed
                </label>
            </div>
        </div>
        <button onClick={postTodo} className="btn btn-warning mb-2 w-100" >
                    Post Todo
        </button>
        <button onClick={createTodo}
              className="btn btn-primary mb-2 w-100">
            Create Todo
        </button>
        <button onClick={updateTodo} 
            className="btn btn-success mb-2 w-100">
            Update Todo
        </button>

        { /* EXTRA CREDIT: */ } 
        {errorMessage && (
            <div className="alert alert-danger mb-2 mt-2">
                {errorMessage}
            </div>
        )}

        <ul className="list-group">
            {todos.map((todo) => (
                <li key={todo.id}
                    className="list-group-item">
                    <button
                        onClick={() => fetchTodoById(todo.id)}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                    </button>
                    <button
                        onClick={() => deleteTodo(todo)}
                        className="btn btn-danger float-end ms-2">
                        Delete
                    </button>
                    <input
                    checked={todo.completed}
                    type="checkbox" readOnly
                    />
                    {todo.title}
                    <p>{todo.description}</p>
                    <p>{todo.due}</p>
                </li>
            ))}
        </ul>
        
      </div>
    );
  }
  export default WorkingWithArrays;