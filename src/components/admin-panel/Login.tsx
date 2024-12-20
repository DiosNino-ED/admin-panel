import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaLaptop } from "react-icons/fa"; // Import ikon untuk logo

const Login = () => {
  return (
    <div className="bg-accent min-h-screen grid place-items-center">
      <div className="border-8 border-blue-500 rounded-2xl p-10 bg-white shadow-2xl">
        <div className="flex items-center mb-6">
          <FaLaptop size={40} className="text-blue-500 mr-3" />
          <h1 className="place-items-center text-3xl font-bold text-blue-700">DJawaComputer</h1>
        </div>
        <button
          className="bg-white px-12 py-4 flex gap-2 items-center border-2 border-blue-500 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all duration-300"
          onClick={() => signIn("google")}
        >
          <FcGoogle size={30} />
          <span className="text-blue-700 font-semibold">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
