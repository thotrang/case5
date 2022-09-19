import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../../service/apiToken";
import { useDispatch, useSelector } from "react-redux";
import { getAllApi, getUserToLocalstorageApi } from "../../service/userService";
import { myProfile, listAllUser } from "../../redux/slice/userSlice"
import { getAllPost } from "../../service/postService";
export default function Profile() {
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
  }, [])
  return (
    <>
      <Topbar profile = {myProfSelector}/>
      <div className="profile">
        <Sidebar listUser={listUser}/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed post = {postSelector}/>
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
