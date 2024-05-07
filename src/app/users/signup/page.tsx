import Head from 'next/head';
import React from 'react'

export default async function SignUp() {
  const response = await fetch(`http://localhost:5050/api/users/register`)
  if(!response.ok){
    throw new Error ( " An error occured ")
  }
  const signup = await response.json();
  console.log(signup);
}

// const signUp = () => {
//   return (
//     <>
//       <Head>
//         <title>Sign Up</title>
//         <meta name="description" content="Signup page for users." />
//       </Head>
//       <div className="min-h-screen flex flex-col justify-center items-center">
//         <h1 className="text-xl font-bold mb-4">Sign Up</h1>
//         <form onSubmit={handleSignup} className="w-full max-w-md">
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//             <input
//               type="text"
//               id="username"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign Up
//             </button>
//           </div>
//           {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
//         </form>
//       </div>
//     </>
//   );
// };



