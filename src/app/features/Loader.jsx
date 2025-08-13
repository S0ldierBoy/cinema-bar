const Loader = () => {
  return (
    <>
      <style>
        {`
          @keyframes slide {
            0%   { transform: translateX(-300px); }
            100% { transform: translateX(1300px); }
          }
        `}
      </style>

      <div className="fixed inset-x-0 mx-auto w-full max-w-[1300px] h-[3px] overflow-hidden ">
        <div className="relative w-full h-full bg-gradient-to-r from-transparent via-green-500 to-transparent">
          <div
            className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-transparent via-black to-transparent"
            style={{ animation: 'slide 1s linear infinite' }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
