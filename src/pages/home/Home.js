import "./home.css"
import LeftSidebar from "../../components/leftSideBar/LeftSideBar";
import Topbar from "../../components/topbar/TopBar";
import Rightbar from "../../components/rightbar/RightBar";

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <LeftSidebar />
                <div style={{flex : "5.5"}}></div>
                {/*<div style={{flex : "3.5"}}>1</div>*/}
                {/*<Feed/>*/}
                <Rightbar/>
            </div>
        </>
    );
}
