
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../../service/apiToken";
import { useDispatch, useSelector } from "react-redux";
import { getAllApi, getUserToLocalstorageApi } from "../../service/userService";
import {myProfile} from "../../redux/slice/userSlice"
export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [myProf,setMyProf] = useState({})
  const myProfSelector = useSelector(myProfile)
  useEffect(() => {
    if (!checkToken()) {
      console.log(checkToken());
      navigate('/login')
    }
    dispatch(getUserToLocalstorageApi())
  },[])

  return (
    <>

      <Topbar profile = {myProfSelector}/>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}