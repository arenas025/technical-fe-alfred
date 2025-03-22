const Spinner = () => {
  return (
    <div className="flex items-center flex-col gap-4  justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-white"></div>
      <p className="text-white text-2xl font-bold ">Loading airports...</p>
    </div>
  );
};

export default Spinner;
