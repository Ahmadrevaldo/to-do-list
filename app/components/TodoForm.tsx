"use client";
import { useState } from "react";

export default function TodoForm({
  onAdd,
}: {
  onAdd: (task: string, deadline: string) => void;
}) {
  const [newTask, setNewTask] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    onAdd(newTask, deadline);
    setNewTask("");
    setDeadline("");
  };

  return (
    <div className="flex flex-col md:flex-row gap-3">
      {/* Input tugas */}
      <input
        type="text"
        placeholder="Ketik tugas baru..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />

      {/* Input deadline */}
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Tombol tambah */}
      <button
        onClick={handleAddTask}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        + Tambah
      </button>
    </div>
  );
}

