import Image from 'next/image';

const MenuAdmin = () => (
    <div className="bg-white/10 col-span-3 rounded-lg p-4">
        <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">
            Dashboard<span className="text-indigo-400">.</span>
        </h1>
        <p className="text-slate-400 text-sm mb-2">Welcome back, Admin</p>

        {/* Heading Where the Profile Pic, Name and Position is */}
        <a href="/AdminDashboard/profile" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
            <div>
                <Image className="rounded-full w-15 h-15 relative object-cover" src="/static/user1.jpg" alt="User Profile Picture" width={60} height={60} />
            </div>
            <div>
                <p className="font-medium group-hover:text-indigo-400 leading-4">Space Dad</p>
                <span className="text-xs text-slate-400">Cyber Security</span>
            </div>
        </a>

        <hr className="my-2 border-slate-700" />


        {/* <div id="menu" className="flex flex-col space-y-2 my-5">

    </div> */}

        {/* Dashboard */}
        <a href="/AdminDashboard/main" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-1 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
            <div className='items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </div>
            <div>
                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Dashboard</p>
                <span className="text-slate-400 text-sm hidden md:block">Database Overview</span>
            </div>
        </a>

        {/* Users */}
        <a href="/AdminDashboard/users" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-1 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
            <div className='items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            </div>
            <div>
                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Users *</p>
                <p className="text-slate-400 text-sm hidden md:block">Manage users</p>
            </div>
        </a>


        {/* Ranking */}
        <a href="/AdminDashboard/rank" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-1 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
            <div className='items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-up-arrow group-hover:text-indigo-400" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5" />
                </svg>
            </div>
            <div>
                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Ranking</p>
                <span className="text-slate-400 text-sm hidden md:block">View Leader Board </span>
            </div>
        </a>

        {/* Group Projects */}
        <a href="/AdminDashboard/projects" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-1 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
            <div className='items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase group-hover:text-indigo-400" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                </svg>
            </div>
            <div>
                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Projects</p>
                <span className="text-slate-400 text-sm hidden md:block">View STEMs project </span>
            </div>
        </a>

        <hr className="my-2 border-slate-700" />

        <div id="menu" className="flex flex-col space-y-2 my-5">
            <h1 className='font-bold'>Hostels</h1>
        </div>


        {/* Male Hostel */}
        <a href="#" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-1 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
            <div className='items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-gender-male group-hover:text-indigo-400" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
                </svg>
            </div>
            <div>
                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Male</p>
                <span className="text-slate-400 text-sm hidden md:block">View the hostel data</span>
            </div>
        </a>

        {/* Female Hostel */}
        <a href="#" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-1 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
            <div className='items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-gender-female group-hover:text-indigo-400" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5" />
                </svg>
            </div>
            <div>
                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Female</p>
                <span className="text-slate-400 text-sm hidden md:block">View the hostel data</span>
            </div>
        </a>



        <hr className="my-2 border-slate-700" />

        {/* Settings */}
        <a href="#" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-1 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
            <div className='items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
            <div>
                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Settings</p>

            </div>
        </a>

        {/* Logout  */}
        <a href="#" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-1 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
            <div className='items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-door-open group-hover:text-indigo-400" viewBox="0 0 16 16">
                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
                </svg>
            </div>
            <div>
                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Logout</p>

            </div>
        </a>




        <p className="text-sm text-center text-gray-600">v1.0.0.1 | &copy; 2024 STEM Execs</p>
    </div>
);

export default MenuAdmin;
