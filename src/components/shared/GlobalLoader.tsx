const GlobalLoader = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">

      {/* Logo */}
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl text-white shadow-xl animate-pulse">
        🚘
      </div>

      <h1 className="text-4xl font-bold text-slate-900">
        DriveMart
      </h1>

      <p className="mt-3 text-gray-500">
        Finding your perfect ride...
      </p>

      {/* Progress */}
      <div className="mt-10 h-2 w-72 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-blue-600" />
      </div>

      <p className="mt-6 text-sm text-gray-400">
        Loading premium vehicles...
      </p>

    </div>
  );
};

export default GlobalLoader;