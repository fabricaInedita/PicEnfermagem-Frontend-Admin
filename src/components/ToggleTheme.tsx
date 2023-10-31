import React, { useEffect, useState } from 'react';

function ToggleTheme({state,onClick}) {

  return (
    <button
      className="rounded-full w-10 bg-white dark:bg-zinc-700 flex items-center transition duration-300 focus:outline-none shadow"
      onClick={onClick}
    >
      <div
        className={(state? '-translate-x-2 bg-gradient-to-r from-zinc-700 to-violet-800 ':'bg-gradient-to-r from-rose-400 to-violet-600 translate-x-full ')+"w-6 h-6 relative rounded-full transition duration-500 transform  -translate-x-2 p-1 text-white"}
      >
      </div>
    </button>
  );
};

export default ToggleTheme;
