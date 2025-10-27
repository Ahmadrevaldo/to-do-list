"use client";
import { Todo } from "@/app/types/todo";

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  const isExpired = todo.deadline && new Date(todo.deadline) < new Date();

  return (
    <li className="flex justify-between items-center border rounded-lg px-3 py-2 bg-white">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="h-4 w-4 accent-blue-600"
        />
        <div>
          <p className={todo.done ? "line-through text-gray-500" : "text-gray-800"}>
            {todo.task}
          </p>
          {todo.deadline && (
            <p
              className={`text-xs ${
                isExpired ? "text-red-500" : "text-gray-500"
              }`}
            >
              {new Date(todo.deadline).toLocaleDateString("id-ID")}
              {isExpired && " (lewat)"}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-sm text-red-500"
      >
        Hapus
      </button>
    </li>
  );
}
