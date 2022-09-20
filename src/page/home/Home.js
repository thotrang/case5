
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
import {myProfile, listAllUser} from "../../redux/slice/userSlice"
import {getAllPost} from "../../service/postService";

export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const myProfSelector = useSelector(myProfile);
  const listUser = useSelector(listAllUser)
  const postSelector = useSelector(state => state.posts)
  useEffect(() => {
    if (!checkToken()) {
      navigate('/login')
    }
    dispatch(getUserToLocalstorageApi())
    dispatch(getAllPost())
    dispatch(getAllApi())
  },[])

  return (
    <>
      <Topbar profile = {myProfSelector}/>
      <div className="homeContainer">
        <Sidebar listUser={listUser} myProfile = {myProfSelector}/>
        <Feed post = {postSelector} myProfile = {myProfSelector}/>
        <Rightbar />
      </div>
    </>
  );
}