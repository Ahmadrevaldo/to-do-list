"use client";

import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types/todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load data dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // Simpan data ke localStorage setiap kali todos berubah
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Tambah tugas baru
  const addTodo = (task: string, deadline: string) => {
    const newTodo = {
      id: Date.now(),
      task,
      deadline,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle status selesai
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Hapus tugas
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-xl p-4 transition-all duration-200 hover:shadow-lg">
        <h2 className="text-xl font-semibold text-blue-600 mb-3 border-b pb-2">
          Daftar Tugas
        </h2>

        {todos.filter((t) => !t.done).length === 0 && (
          <p className="text-gray-400 text-center py-2">
            🎉 Semua tugas telah selesai!
          </p>
        )}

        <TodoForm onAdd={addTodo} />

        <ul className="mt-4 space-y-2">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          ) : (
            <p className="text-gray-400 text-center mt-3">
              Semua tugas sudah selesai atau belum ada tugas.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
