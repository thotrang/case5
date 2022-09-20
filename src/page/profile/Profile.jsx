import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkToken } from "../../service/apiToken";
import { useDispatch, useSelector } from "react-redux";
import { getAllApi, getUserToLocalstorageApi } from "../../service/userService";
import { myProfile, listAllUser } from "../../redux/slice/userSlice"
import { getPostInProfile } from "../../service/postService";
export default function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const myProfSelector = useSelector(myProfile);
  const listUser = useSelector(listAllUser)
  const postSelector = useSelector(state => state.posts.postsInProfile)
  const param = useParams()
  useEffect(() => {
    if (!checkToken()) {
      navigate('/login')
    }
    dispatch(getUserToLocalstorageApi())
    dispatch(getPostInProfile(param.id))
    dispatch(getAllApi())
  }, [param.id])
  const isShare = myProfSelector._id === param.id
  return (
    <>
      <Topbar profile = {myProfSelector}/>
      <div className="profile">
        <Sidebar listUser={listUser} myProfile = {myProfSelector}/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={(myProfSelector.avatar) ? myProfSelector.avatar : 'https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg'}
                alt=""
              />
              <img
                className="profileUserImg"
                src={(myProfSelector.avatar) ? myProfSelector.avatar : 'https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg'}
                alt=""
              />
            </div>
            {/* <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div> */}
          </div>
          <div className="profileRightBottom">
            <Feed post = {postSelector} myProfile = {myProfSelector} isShare = {isShare}/>
            <Rightbar profile = {myProfSelector} />
          </div>
        </div>
      </div>
    </>
  );
}
