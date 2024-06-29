"use client";

import { ChangeEvent, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  matricno: string;
  email: string;
  role: string;
}

interface Group {
  id: number;
  name: string;
  leadId: number;
}

const ManageUsersAdmin = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [editUser, setEditUser] = useState<Partial<User>>({});
  const [editGroup, setEditGroup] = useState<Partial<Group>>({});
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupLeadId, setNewGroupLeadId] = useState<number | undefined>();

  useEffect(() => {
    fetchUsers();
    fetchGroups();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/members');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const fetchGroups = async () => {
    try {
      const response = await axios.get('/api/groups');
      setGroups(response.data);
    } catch (error) {
      console.error('Failed to fetch groups:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    const value = e.target.value;
    setEditUser(prevState => ({ ...prevState, [field]: value }));
  };

  const handleGroupChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    const value = e.target.value;
    setEditGroup(prevState => ({ ...prevState, [field]: value }));
  };

  const addRow = async () => {
    try {
      const response = await axios.post('/api/members', editUser);
      setUsers([...users, response.data]);
      setEditUser({});
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  const editRow = (user: User) => {
    setEditUser(user);
  };

  const saveRow = async (id: number) => {
    try {
      const response = await axios.put('/api/members', { id, ...editUser });
      setUsers(users.map(user => (user.id === id ? response.data : user)));
      setEditUser({});
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const deleteRow = async (id: number) => {
    try {
      await axios.delete('/api/members', { data: { id } });
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const addGroup = async () => {
    if (!newGroupName || newGroupLeadId === undefined) return;
    try {
      const response = await axios.post('/api/groups', { name: newGroupName, leadId: newGroupLeadId });
      setGroups([...groups, response.data]);
      setNewGroupName('');
      setNewGroupLeadId(undefined);
    } catch (error) {
      console.error('Failed to add group:', error);
    }
  };

  const editGroupRow = (group: Group) => {
    setEditGroup(group);
  };

  const saveGroupRow = async (id: number) => {
    try {
      const response = await axios.put('/api/groups', { id, ...editGroup });
      setGroups(groups.map(group => (group.id === id ? response.data : group)));
      setEditGroup({});
    } catch (error) {
      console.error('Failed to update group:', error);
    }
  };

  const deleteGroupRow = async (id: number) => {
    try {
      await axios.delete('/api/groups', { data: { id } });
      setGroups(groups.filter(group => group.id !== id));
    } catch (error) {
      console.error('Failed to delete group:', error);
    }
  };

  const renderTable = () => {
    return users.map(user => (
      <tr key={user.id}>
        {editUser.id === user.id ? (
          <>
            <td className="py-3 px-2">{user.id}</td>
            <td className="py-3 px-2">
              <input
                className="bg-white/5 rounded-md text-white w-30"
                value={editUser.firstName || ''}
                onChange={(e) => handleInputChange(e, 'firstName')}
              />
            </td>
            <td className="py-3 px-2">
              <input
                className="bg-white/5 rounded-md text-white w-20"
                value={editUser.lastName || ''}
                onChange={(e) => handleInputChange(e, 'lastName')}
              />
            </td>
            <td className="py-3 px-2">
              <input
                className="bg-white/5 rounded-md text-white w-20"
                value={editUser.matricno || ''}
                onChange={(e) => handleInputChange(e, 'matricno')}
              />
            </td>
            <td className="py-3 px-2">
              <input
                className="bg-white/5 rounded-md text-white w-20"
                value={editUser.email || ''}
                onChange={(e) => handleInputChange(e, 'email')}
              />
            </td>
            <td className="py-3 px-2">
              <select
                className="bg-white/5 rounded-md text-white w-20"
                value={editUser.role || ''}
                onChange={(e) => handleInputChange(e, 'role')}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
                <option value="SUPERADMIN">SUPERADMIN</option>
              </select>
            </td>
            <td className="py-3 px-2 text-right">
              <button onClick={() => saveRow(user.id)} className="px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="hover:text-green-500 w-5 h-5 bi bi-floppy" viewBox="0 0 16 16">
                  <path d="M11 2H9v3h2z" />
                  <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a.5.5 0 0 1 .5.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                </svg>
              </button>
            </td>
          </>
        ) : (
          <>
            <td className="py-3 px-2">{user.id}</td>
            <td className="py-3 px-2">{user.firstName}</td>
            <td className="py-3 px-2">{user.lastName}</td>
            <td className="py-3 px-2">{user.matricno}</td>
            <td className="py-3 px-2">{user.email}</td>
            <td className="py-3 px-2">{user.role}</td>
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

  const renderGroupTable = () => {
    return groups.map(group => (
      <tr key={group.id}>
        {editGroup.id === group.id ? (
          <>
            <td className="py-3 px-2">{group.id}</td>
            <td className="py-3 px-2">
              <input
                className="bg-white/5 rounded-md text-white w-30"
                value={editGroup.name || ''}
                onChange={(e) => handleGroupChange(e, 'name')}
              />
            </td>
            <td className="py-3 px-2">
              <select
                className="bg-white/5 rounded-md text-white w-20"
                value={editGroup.leadId || ''}
                onChange={(e) => handleGroupChange(e, 'leadId')}
              >
                <option value="" disabled>Select Group Lead</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
              </select>
            </td>
            <td className="py-3 px-2 text-right">
              <button onClick={() => saveGroupRow(group.id)} className="px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="hover:text-green-500 w-5 h-5 bi bi-floppy" viewBox="0 0 16 16">
                  <path d="M11 2H9v3h2z" />
                  <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                </svg>
              </button>
            </td>
          </>
        ) : (
          <>
            <td className="py-3 px-2">{group.id}</td>
            <td className="py-3 px-2">{group.name}</td>
            <td className="py-3 px-2">{users.find(user => user.id === group.leadId)?.firstName} {users.find(user => user.id === group.leadId)?.lastName}</td>
            <td className="py-3 px-2 text-right">
              <button onClick={() => editGroupRow(group)} className="px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 hover:text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
              <button onClick={() => deleteGroupRow(group.id)} className="px-2 py-1">
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
      <h1 className="font-bold py-4 uppercase">Users/ Members</h1>
      <div className="overflow-x-auto overflow-y-auto max-h-52">
        <table className="w-full whitespace-nowrap">
          <caption className="sr-only">User Information Table</caption>
          <thead className="bg-black/60 text-white">
            <tr>
              <th className="text-left py-3 px-2 rounded-l-lg" scope="col">ID</th>
              <th className="text-left py-3 px-2" scope="col">First Name</th>
              <th className="text-left py-3 px-2" scope="col">Last Name</th>
              <th className="text-left py-3 px-2" scope="col">Matric No.</th>
              <th className="text-left py-3 px-2" scope="col">Email</th>
              <th className="text-left py-3 px-2" scope="col">Role</th>
              <th className="text-right py-3 px-2 rounded-r-lg" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderTable()}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <input className="bg-white/5 rounded-md text-white w-30 mr-2" value={editUser.firstName || ''} onChange={(e) => handleInputChange(e, 'firstName')} placeholder="First Name" />
        <input className="bg-white/5 rounded-md text-white w-20 mr-2" value={editUser.lastName || ''} onChange={(e) => handleInputChange(e, 'lastName')} placeholder="Last Name" />
        <input className="bg-white/5 rounded-md text-white w-20 mr-2" value={editUser.matricno || ''} onChange={(e) => handleInputChange(e, 'matricno')} placeholder="Matric No." />
        <input className="bg-white/5 rounded-md text-white w-20 mr-2" value={editUser.email || ''} onChange={(e) => handleInputChange(e, 'email')} placeholder="Email" />
        <select className="bg-white/5 rounded-md text-white w-20 mr-2" value={editUser.role || ''} onChange={(e) => handleInputChange(e, 'role')}>
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
          <option value="SUPERADMIN">SUPERADMIN</option>
        </select>
        <button onClick={addRow} className="px-4 py-1 bg-black text-white rounded-lg">Add User</button>
      </div>

      <h1 className="font-bold py-4 uppercase">Groups</h1>
      <div className="overflow-x-auto overflow-y-auto max-h-52">
        <table className="w-full whitespace-nowrap">
          <caption className="sr-only">Group Information Table</caption>
          <thead className="bg-black/60 text-white">
            <tr>
              <th className="text-left py-3 px-2 rounded-l-lg" scope="col">ID</th>
              <th className="text-left py-3 px-2" scope="col">Name</th>
              <th className="text-left py-3 px-2" scope="col">Group Lead</th>
              <th className="text-right py-3 px-2 rounded-r-lg" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderGroupTable()}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <input className="bg-white/5 rounded-md text-white w-30 mr-2" value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} placeholder="Group Name" />
        <select className="bg-white/5 rounded-md text-white w-20 mr-2" value={newGroupLeadId} onChange={(e) => setNewGroupLeadId(Number(e.target.value))}>
          <option value="" disabled>Select Group Lead</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.firstName} {user.lastName}
            </option>
          ))}
        </select>
        <button onClick={addGroup} className="px-4 py-1 bg-black text-white rounded-lg">Add Group</button>
      </div>
    </div>
  );
};

export default ManageUsersAdmin;
