"use client";

import { useState } from 'react';

const UserProfile = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Finalizing the Dashboard UI and Components',
            status: 'Finished',
        },
    ]);

    const [newTaskName, setNewTaskName] = useState('');
    const [editingTask, setEditingTask] = useState<number | null>(null);
    const [editingName, setEditingName] = useState('');
    const [editingStatus, setEditingStatus] = useState('');

    const handleAddTask = () => {
        if (newTaskName.trim() === '') return;
        const newTask = {
            id: tasks.length + 1,
            name: newTaskName,
            status: 'Pending',
        };
        setTasks([...tasks, newTask]);
        setNewTaskName('');
    };

    const getStatusColor = (status: string) => {
        if (status === 'Finished') {
            return 'text-green-500';
        } else if (status === 'Pending') {
            return 'text-yellow-500';
        } else {
            return 'text-red-500';
        }
    };

    const handleEditTask = (task: { id: number; name: string; status: string }) => {
        setEditingTask(task.id);
        setEditingName(task.name);
        setEditingStatus(task.status);
    };

    const handleSaveTask = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, name: editingName, status: editingStatus } : task
        ));
        setEditingTask(null);
        setEditingName('');
        setEditingStatus('');
    };

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="bg-white/10 col-span-9 rounded-lg p-6">


            {/* Profile */}
            <div id="Rank">
                <h1 className="font-bold py-4 uppercase">Profile</h1>
                <div id="stats" className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                    <div className="flex bg-black shadow-lg rounded-lg overflow-hidden">
                        <img src="/static/user1.jpg" className="object-cover w-32 h-32 rounded-l-lg" alt="Profile Picture" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">Space Dad</h2>
                            <p className="text-gray-500 font-medium">Cyber Security</p>
                            <p className="text-gray-500 text-sm">200 Level </p>
                        </div>
                    </div>

                    <div className="bg-black/60 p-6 rounded-lg">
                        <div className="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 bi bi-trophy" viewBox="0 0 16 16">
                                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
                                </svg>

                            </div>
                            <div>
                                <p className="text-blue-300 text-sm font-medium uppercase leading-4">Total Point</p>
                                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                    <span>+54</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="lightgreen" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                        </svg>

                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Stats*/}
            <div id="Stats">
                <h1 className="font-bold py-4 uppercase">Stats</h1>
                <div id="stats" className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-black/60 to-white/5 p-6 rounded-lg">


                        <div className="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-indigo-300 text-sm font-medium uppercase leading-4">Primary Group</p>
                                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                    <span>Cyber Sec.</span>


                                </p><p className="text-gray-500 text-sm">SuperUser / Admin </p>
                            </div>
                        </div>
                    </div>


                    <div className="bg-black/60 p-6 rounded-lg">
                        <div className="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 bi bi-briefcase group-hover:text-indigo-400" viewBox="0 0 16 16">
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                                </svg>

                            </div>
                            <div>
                                <p className="text-teal-300 text-sm font-medium uppercase leading-4">Group Tasks</p>
                                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                    <span>+1</span>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black/60 p-6 rounded-lg">
                        <div className="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 bi bi-trophy" viewBox="0 0 16 16">
                                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
                                </svg>

                            </div>
                            <div>
                                <p className="text-blue-300 text-sm font-medium uppercase leading-4">Group Productivity</p>
                                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                    <span>-29</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                        </svg>

                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MIle Stones*/}
            <div id="Milestones">
                <h1 className="font-bold py-4 uppercase">Milestones</h1>

               
                <div className="overflow-x-scroll">
                    <table className="w-full whitespace-nowrap">
                        <thead className="bg-black/60">
                            <tr>
                                <th className="text-left py-3 px-2 rounded-l-lg">Tasks</th>
                                <th className="text-right py-3 pr-2">Status</th>
                                <th className="text-right py-3 px-4 rounded-r-lg">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task => (
                                <tr key={task.id} className="border-b border-gray-700">
                                    <td className="py-3 px-2 pr-36 font-bold">
                                        {editingTask === task.id ? (
                                            <input
                                                type="text"
                                                value={editingName}
                                                onChange={(e) => setEditingName(e.target.value)}
                                                className="w-full px-2"
                                            />
                                        ) : (
                                            <div className="inline-flex space-x-3 items-left">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-steps" viewBox="0 0 16 16">
                                                        <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                                                    </svg>
                                                </span>
                                                <span>{task.name}</span>
                                            </div>
                                        )}
                                    </td>
                                    <td className="py-3 px-2 text-right">
                                        {editingTask === task.id ? (
                                            <input
                                                type="text"
                                                value={editingStatus}
                                                onChange={(e) => setEditingStatus(e.target.value)}
                                                className="w-full px-2 text-right"
                                            />
                                        ) : (
                                            <span className={getStatusColor(task.status)}>
                                            {task.status}
                                        </span>
                                        )}
                                    </td>
                                    <td className="py-3 px-2 text-right">
                                        <div className="inline-flex items-center space-x-3 justify-end">
                                            {editingTask === task.id ? (
                                                <button
                                                    onClick={() => handleSaveTask(task.id)}
                                                    className="hover:text-white"
                                                    title="Save"
                                                >
                                                    Save
                                                </button>
                                            ) : (
                                                <a href="#" title="Edit" className="hover:text-white" onClick={() => handleEditTask(task)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </a>
                                            )}
                                            <a href="#" title="Delete" className="hover:text-white" onClick={() => handleDeleteTask(task.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4">
                        <input
                            type="text"
                            value={newTaskName}
                            onChange={(e) => setNewTaskName(e.target.value)}
                            placeholder="New task name"
                            className="px-2 py-1 border rounded"
                            style={{ color: 'black', backgroundColor: 'lightgray' }}
                        />
                        <button onClick={handleAddTask} className="ml-2 px-4 py-2 bg-black text-white rounded">Suggest Task</button>
                    </div>
                </div>


            </div>






        </div>
    )
};
export default UserProfile;

