"use client";

import { ChangeEvent, SetStateAction, useState } from 'react';

const ManageUsers = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Space Dad',
            status: 'Admin',
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
            status: 'Edit Group',
        };
        setTasks([...tasks, newTask]);
        setNewTaskName('');
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



    const initialUsers = [
        { id: 1, name: 'Fat Spagetti', group: 'Cyber Sec.', status: 'Prosperting' },
        { id: 2, name: 'Space Dad', group: 'Charity', status: 'User' },
    ];

    const [users, setUsers] = useState(initialUsers);
    const [editingId, setEditingId] = useState(null);
    const [editUser, setEditUser] = useState({ name: '', group: '', status: '' });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;
        setEditUser(prevState => ({ ...prevState, [field]: value }));
    };

    const addRow = () => {
        setUsers([...users, { id: users.length + 1, ...editUser }]);
        setEditUser({ name: '', group: '', status: '' });
    };

    const editRow = (user: { id: any; name: any; group: any; status: any; }) => {
        setEditingId(user.id);
        setEditUser({ name: user.name, group: user.group, status: user.status });
    };

    const saveRow = (id: number) => {
        const updatedUsers = users.map(user => (user.id === id ? { ...user, ...editUser } : user));
        setUsers(updatedUsers);
        setEditingId(null);
        setEditUser({ name: '', group: '', status: '' });
    };

    const deleteRow = (id: number) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
    };

    const renderTable = () => {
        return users.map(user => (
            <tr key={user.id}>
                {editingId === user.id ? (
                    <>
                        <td className="py-3 px-2"><input className="bg-white/5 rounded-md text-white w-30" value={editUser.name} onChange={(e) => handleInputChange(e, 'name')} /></td>
                        <td className="py-3 px-2"><input className="bg-white/5 rounded-md text-white w-20" value={editUser.group} onChange={(e) => handleInputChange(e, 'group')} /></td>
                        <td className="py-3 px-2"><input className="bg-white/5 rounded-md text-white w-20" value={editUser.status} onChange={(e) => handleInputChange(e, 'status')} /></td>
                        <td className="py-3 px-2 text-right">
                            <button onClick={() => saveRow(user.id)} className="px-2 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="hover:text-green-500 w-5 h-5 bi bi-floppy" viewBox="0 0 16 16">
                                    <path d="M11 2H9v3h2z" />
                                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                                </svg>
                            </button>
                        </td>
                    </>
                ) : (
                    <>
                        <td className="py-3 px-2">{user.name}</td>
                        <td className="py-3 px-2">{user.group}</td>
                        <td className="py-3 px-2">{user.status}</td>
                        <td className="py-3 px-2 text-right">
                            <button onClick={() => editRow(user)} className="px-2 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 hover:text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                            <button onClick={() => deleteRow(user.id)} className="px-2 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 bi bi-trash hover:text-red-600" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                            </button>
                        </td>
                    </>
                )}
            </tr>
        ));
    };

    return (
        <div className="bg-white/10 col-span-9 rounded-lg p-6">


            {/* Admin */}
            <h1 className="font-bold py-4 uppercase">Users/ Members</h1>

            <div className="overflow-x-auto overflow-y-auto max-h-52">
                <table className="w-full whitespace-nowrap">
                    <caption className="sr-only">User Information Table</caption>
                    <thead className="bg-black/60 text-white">
                        <tr>
                            <th className="text-left py-3 px-2 rounded-l-lg" scope="col">Name</th>
                            <th className="text-left py-3 px-2" scope="col">Group</th>
                            <th className="text-left py-3 px-2" scope="col">Status</th>
                            <th className="text-right py-3 px-2 rounded-r-lg" scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable()}
                    </tbody>
                </table>
            </div>
            <div className="mt-4">
                <input className="bg-white/5 rounded-md text-white w-30 mr-2" value={editUser.name} onChange={(e) => handleInputChange(e, 'name')} placeholder="Name" />
                <input className="bg-white/5 rounded-md text-white  w-20 mr-2" value={editUser.group} onChange={(e) => handleInputChange(e, 'group')} placeholder="Group" />
                <input className="bg-white/5 rounded-md text-white  w-20 mr-2" value={editUser.status} onChange={(e) => handleInputChange(e, 'status')} placeholder="Status" />
                <button onClick={addRow} className="px-4 py-1 bg-black text-white rounded-lg">Add User</button>
            </div>



            {/* Users/ Members */}
            <div id="UserandMembers">
                <h1 className="font-bold py-4 uppercase">Admin</h1>


                <div className="overflow-x-scroll">
                    <table className="w-full whitespace-nowrap">
                        <thead className="bg-black/60">
                            <tr>
                                <th className="text-left py-3 px-2 rounded-l-lg">Names</th>
                                <th className="text-right py-3 pr-2">Group</th>
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
                                            <span className={(task.status)}>
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
                        <button onClick={handleAddTask} className="ml-2 px-4 py-2 bg-black text-white rounded">Add Admin</button>
                    </div>
                </div>


            </div>



        </div>
    )
};
export default ManageUsers;

