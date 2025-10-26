"use client";
import { useState } from "react";

export default function TodoForm( {
    onAdd,
}: {
    onAdd: (task: string, deadline?: string) => void;
} ) {
    const [task, setNewTask] = useState( "" );
    const [deadline, setDeadline] = useState( "" );

    const handleAddTask = () => {
        if (!setNewTask.trim()) return;
        onAdd(setNewTask, deadline);
        setNewTask( "" );
        setDeadline( "" );
    };

    return (
        <div className="flex flex-col md:flex-row gap-3">
            {/* input tugas */}
            <input
                type="text"
                placeholder="ketik tugas baru..."
                value={newTask}
                onChange={ ( e ) => setNewTask( e.target.value ) }
                className="flex-1 raunded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* input deadline */}
            <input
                type="date"
                value={deadline}
                onChange={ ( e ) => setDeadline( e.target.value ) }
                className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* tombol tambah */}
            <button
                onClick={ handleAddTask }
                className="raunded-ig bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
            >
                + Tambah
            </button>
        </div>
    );
}
