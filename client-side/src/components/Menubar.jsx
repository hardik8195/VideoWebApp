import "../index.css"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Menubar() {
  return (
    <div className="flex-1 pr- bg-[#202020ec]">
      <div className="p-4   h-screen ">
      <Link to="/" style={{textDecoration:"none"}}>
        <div className="flex gap-1 cursor-pointer">
          <YouTubeIcon className="text-white" />
          <p className="text-white font-semibold mb-2">YouTube</p>
        </div>
        </Link>
        <hr className="m-3" />
        <ul>
        <Link to="/" style={{textDecoration:"none"}}>
          <li className="flex gap-1 my-1">
            <HomeIcon className="text-white" />
            <p className="text-white ">Home</p>
          </li>
          </Link>
          <Link to="trends" style={{textDecoration:"none"}}>
          <li className="flex gap-1 my-1 cursor-pointer">
            <ExploreIcon className="text-white" />
            <p className="text-white">Explore</p>
          </li>
          </Link>
          <li className="flex gap-1 my-1">
            <SubscriptionsIcon className="text-white" />
            <p className="text-white">Subscriptions</p>
          </li>

          <hr className="m-3" />

          <li className="flex gap-1 my-1">
            <LibraryAddIcon className="text-white" />
            <p className="text-white ">Libary</p>
          </li>
          <li className="flex gap-1 my-1">
            <HistoryIcon className="text-white" />
            <p className="text-white">History</p>
          </li>

          <hr className="m-3" />
          <p className=" text-white">if you want to explore new things plz sign in</p>
          <Button>Signin</Button>
        </ul>
      </div>
    </div>
  )
}