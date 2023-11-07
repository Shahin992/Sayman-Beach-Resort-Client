import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loadingAni from "../../assets/loadingAnimation.json"


const Navbar = () => {
  const {user,logOut,loading} = useContext(AuthContext)

  if (loading) {
    return <div className="flex justify-center items-center"><Lottie animationData={loadingAni}></Lottie></div>
}

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Good job!", "Log Out Successfully!", "success");
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: ErrorMessage,
        });
      });
  };
    return (
      <div className="sticky top-0 z-50">
          <div className="max-w[1200px]  mx-auto">
            <div className="navbar bg-[#2a2b33]  text-white">
  <div className="navbar-start">
    <div className="dropdown z-10">
      <label tabIndex={0} className="z-10 btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-lg font-bold underline"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/rooms"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-lg font-bold underline"
                        : ""
                    }
                  >
                    Rooms
                  </NavLink>
                </li>
               {
                user ? "" : (
                  <div>
                     <li>
                  <NavLink
                    to="/register"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-lg font-bold underline"
                        : ""
                    }
                  >
                    Register
                  </NavLink>
                </li>
                  </div>
                )
               }
               {
                user ? "" : <div>
                  <li>
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-lg font-bold underline"
                        : ""
                    }
                  >
                    Login
                  </NavLink>
                </li>
                </div>
               }


                <li>
                  <NavLink
                    to="/booking"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-lg font-bold underline"
                        : ""
                    }
                  >
                    My Booking
                  </NavLink>
                </li>

                {
                user ?  <button
                className=" md:hidden btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-medium"
                onClick={handleLogOut}
              >
                Log Out
              </button> : <></>
              }


            

                
        
      </ul>
    </div>
    <img className="h-14 w-14" src="https://i.ibb.co/fCPFdn9/sayeman-beach-resort-logo-final.png" alt="" />
    <p className="md:ml-5 text-lg md:text-2xl lg:text-3xl font-bold">Sayeman Beach Resort</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  mr-1">

    <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-lg font-semibold"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/rooms"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-lg font-bold"
                        : ""
                    }
                  >
                    Rooms
                  </NavLink>
                </li>
                {
                user ? "" : (
                  <div>
                     <li>
                  <NavLink
                    to="/register"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-lg font-bold underline"
                        : ""
                    }
                  >
                    Register
                  </NavLink>
                </li>
                
                  </div>
                )
               }
               {
                user ? "" : <div>
                  <li>
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-lg font-bold underline"
                        : ""
                    }
                  >
                    Login
                  </NavLink>
                </li>
                </div>  
               }
                <li>
                  <NavLink
                    to="/booking"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-lg font-bold underline"
                        : ""
                    }
                  >
                    My Booking
                  </NavLink>
                </li>
                
   
    
    </ul>
  </div>
  <div className="navbar-end">
  {user ? (
            <div className="flex gap-4 justify-center items-center">
              <div className="flex   flex-col justify-center items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full  object-cover"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl  font-medium">{user.displayName}</h3>
                </div>
              </div>
              <div>
                <button
                  className="hidden md:block lg:block btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-medium"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <Link
              className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-medium"
              to="/login"
            >
              log in
            </Link>
          )}
  </div>
</div>
            
        </div>
      </div>
    );
};

export default Navbar;