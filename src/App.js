import './App.css';
import Comments from './components/comments/Comments';
import VideoList from './components/comments/videoList/VideoList';
import MainProfile from './components/MainPofile/MainProfile';
import SideBar from './components/MainPofile/sideBar/SideBar';
import ProfileDescription from './components/profileDescription/ProfileDescription';
import VideoPlayer from './components/videoPlayer/VideoPlayer';



function App() {
  return (
    <div className="App">
      <div>
      <SideBar/>
     <MainProfile/>
      </div>
      
     <div style={{display:"flex", justifyContent:"space-evenly",marginTop:"25px"}}>
      <div>
        <VideoPlayer/>
         <ProfileDescription/>
        <Comments />
      </div>
      <VideoList/>
     </div>
    </div>
  )
}

export default App;
