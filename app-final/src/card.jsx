import {useState, useEffect} from 'react'

export default function Card() {

    const [darkmode, setDarkmode] = useState(false);

    const toggleTheme =() => setDarkmode(!darkmode);
    return (
       <div
      className={`p-6 max-w-sm mx-auto rounded-lg shadow-md text-center transition duration-300 w-350 h-150 ${
        darkmode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
        <img
            src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQcmX67d6VQr_FMo50ApHf6Oy9MpFtCLJEvDpSBK7GUJ9wDyyZJk2EOnhe0R4wIvYZdsn-txtKc3ScfPp7_5eeWGCSRAYE1cua4KY0dZAARTaF5JGiKYeclgCyvZ-d6F4gqq1uySr0NAyKGc2twr3AhUe.jpg?r=87a/150?img=3"
            alt="avatar"
            className="w-115 h-95 rounded-full mx-auto"/>
        <h2 className="mt-4 text-2xl font-semibold text-white-800 text-center">
            Samito de la cruz
        </h2>
        <p className="mt-2 text-white-600 text-center">
            Desarrollador front-end apasionado por el React y el diseño UI/UX
        </p>
        
        <button onClick={toggleTheme} className={`mt-4 px-4 py-2 rounded ${darkmode ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800 duration-300'}transition duration-800`}>The Coalition</button>
        </div>
    )
}
 