"use client";

import { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';
import Select from 'react-select';

interface Project {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  members: number[];
}

interface Member {
  id: number;
  firstName: string;
  lastName: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [editProject, setEditProject] = useState<Partial<Project>>({});
  const [newProject, setNewProject] = useState<Partial<Project>>({ members: [] });

  useEffect(() => {
    fetchProjects();
    fetchMembers();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  const fetchMembers = async () => {
    try {
      const response = await axios.get('/api/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Failed to fetch members:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, field: string, isEdit: boolean) => {
    const value = e.target.value;
    if (isEdit) {
      setEditProject(prevState => ({ ...prevState, [field]: value }));
    } else {
      setNewProject(prevState => ({ ...prevState, [field]: value }));
    }
  };

  const handleMembersChange = (selectedOptions: any, isEdit: boolean) => {
    const selectedMembers = selectedOptions.map((option: any) => option.value);
    if (isEdit) {
      setEditProject(prevState => ({ ...prevState, members: selectedMembers }));
    } else {
      setNewProject(prevState => ({ ...prevState, members: selectedMembers }));
    }
  };

  const addProject = async () => {
    try {
      const response = await axios.post('/api/projects', newProject);
      setProjects([...projects, response.data]);
      setNewProject({ members: [] });
    } catch (error) {
      console.error('Failed to add project:', error);
    }
  };

  const editProjectRow = (project: Project) => {
    setEditProject(project);
  };

  const saveProjectRow = async (id: number) => {
    try {
      const response = await axios.put('/api/projects', { id, ...editProject });
      setProjects(projects.map(project => (project.id === id ? response.data : project)));
      setEditProject({});
    } catch (error) {
      console.error('Failed to update project:', error);
    }
  };

  const deleteProjectRow = async (id: number) => {
    try {
      await axios.delete('/api/projects', { data: { id } });
      setProjects(projects.filter(project => project.id !== id));
    } catch (error) {
      console.error('Failed to delete project:', error);
    }
  };

  const renderProjectTable = () => {
    return projects.map(project => (
      <tr key={project.id}>
        {editProject.id === project.id ? (
          <>
            <td className="py-3 px-2">{project.id}</td>
            <td className="py-3 px-2">
              <input
                className="bg-white/5 rounded-md text-white w-30"
                value={editProject.title || ''}
                onChange={(e) => handleInputChange(e, 'title', true)}
              />
            </td>
            <td className="py-3 px-2">
              <input
                className="bg-white/5 rounded-md text-white w-20"
                value={editProject.description || ''}
                onChange={(e) => handleInputChange(e, 'description', true)}
              />
            </td>
            <td className="py-3 px-2">
              <input
                className="bg-white/5 rounded-md text-white w-20"
                value={editProject.startDate || ''}
                onChange={(e) => handleInputChange(e, 'startDate', true)}
              />
            </td>
            <td className="py-3 px-2">
              <input
                className="bg-white/5 rounded-md text-white w-20"
                value={editProject.endDate || ''}
                onChange={(e) => handleInputChange(e, 'endDate', true)}
              />
            </td>
            <td className="py-3 px-2">
              <Select
                isMulti
                options={members.map(member => ({ value: member.id, label: `${member.firstName} ${member.lastName}` }))}
                value={editProject.members?.map(memberId => {
                  const member = members.find(member => member.id === memberId);
                  return member ? { value: member.id, label: `${member.firstName} ${member.lastName}` } : null;
                })}
                onChange={(selectedOptions) => handleMembersChange(selectedOptions, true)}
              />
            </td>
            <td className="py-3 px-2 text-right">
              <button onClick={() => saveProjectRow(project.id)} className="px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="hover:text-green-500 w-5 h-5 bi bi-floppy" viewBox="0 0 16 16">
                  <path d="M11 2H9v3h2z" />
                  <path d="M1.5 0h11.586a1.5.5 0 0 1 1.06.44l1.415 1.414A1.5.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                </svg>
              </button>
            </td>
          </>
        ) : (
          <>
            <td className="py-3 px-2">{project.id}</td>
            <td className="py-3 px-2">{project.title}</td>
            <td className="py-3 px-2">{project.description}</td>
            <td className="py-3 px-2">{new Date(project.startDate).toLocaleDateString()}</td>
            <td className="py-3 px-2">{project.endDate ? new Date(project.endDate).toLocaleDateString() : 'N/A'}</td>
            <td className="py-3 px-2">
              {(project.members ?? []).map(memberId => {
                const member = members.find(member => member.id === memberId);
                return member ? `${member.firstName} ${member.lastName}` : '';
              }).join(', ')}
            </td>
            <td className="py-3 px-2 text-right">
              <button onClick={() => editProjectRow(project)} className="px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 hover:text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
              <button onClick={() => deleteProjectRow(project.id)} className="px-2 py-1">
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
      <h1 className="font-bold py-4 uppercase">Projects</h1>
      <div className="overflow-x-auto overflow-y-auto max-h-52">
        <table className="w-full whitespace-nowrap">
          <caption className="sr-only">Project Information Table</caption>
          <thead className="bg-black/60 text-white">
            <tr>
              <th className="text-left py-3 px-2 rounded-l-lg" scope="col">ID</th>
              <th className="text-left py-3 px-2" scope="col">Title</th>
              <th className="text-left py-3 px-2" scope="col">Description</th>
              <th className="text-left py-3 px-2" scope="col">Start Date</th>
              <th className="text-left py-3 px-2" scope="col">End Date</th>
              <th className="text-left py-3 px-2" scope="col">Members</th>
              <th className="text-right py-3 px-2 rounded-r-lg" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderProjectTable()}
          </tbody>
        </table>
      </div>
      <div className="mt-4 space-y-2">
        <input
          className="bg-white/5 rounded-md text-white w-full p-2"
          value={newProject.title || ''}
          onChange={(e) => handleInputChange(e, 'title', false)}
          placeholder="Title"
        />
        <input
          className="bg-white/5 rounded-md text-white w-full p-2"
          value={newProject.description || ''}
          onChange={(e) => handleInputChange(e, 'description', false)}
          placeholder="Description"
        />
        <input
          className="bg-white/5 rounded-md text-white w-full p-2"
          value={newProject.startDate || ''}
          onChange={(e) => handleInputChange(e, 'startDate', false)}
          placeholder="Start Date"
        />
        <input
          className="bg-white/5 rounded-md text-white w-full p-2"
          value={newProject.endDate || ''}
          onChange={(e) => handleInputChange(e, 'endDate', false)}
          placeholder="End Date"
        />
        <Select
          isMulti
          options={members.map(member => ({ value: member.id, label: `${member.firstName} ${member.lastName}` }))}
          value={newProject.members?.map(memberId => {
            const member = members.find(member => member.id === memberId);
            return member ? { value: member.id, label: `${member.firstName} ${member.lastName}` } : null;
          })}
          onChange={(selectedOptions) => handleMembersChange(selectedOptions, false)}
          className="text-black"
        />
        <button onClick={addProject} className="px-4 py-2 bg-black text-white rounded-lg">Add Project</button>
      </div>
    </div>
  );
};

export default Projects;
