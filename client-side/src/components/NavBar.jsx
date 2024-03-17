import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import VideoCallIcon from '@mui/icons-material/VideoCall';

export default function NavBar() {
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    return (
        <nav class=" px-4 py-2">
            <div class="container mx-auto flex items-center justify-between">
                <div class="relative flex items-center">
                    <input type="text" placeholder="Search"
                        class="border border-gray-300 bg-white h-8 px-4 pr-8 rounded-l-full focus:outline-none focus:border-blue-500" />
                    <button class="bg-blue-500 text-white h-8 px-4 rounded-r-full hover:bg-blue-600">
                        Search
                    </button>
                </div>
                {user ? <div className="my-3 flex gap-4">
                    <Link to="addVideo"><VideoCallIcon style={{color:"white",fontSize:'40px'}}/></Link>
                    <img src={user.data.loggedInUser.avatar} className="w-9 h-9 border rounded-full bg-black" />
                    <p className="text-white">{user.data.loggedInUser.username}</p>
                </div> : <button onClick={()=>navigate("/login")} class="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                    Sign In
                </button>}

            </div>
        </nav>

    )
}