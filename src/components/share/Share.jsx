import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "../../fireBase/fireBase"
import { useDispatch } from "react-redux";
import { addPost } from "../../service/postService"
export default function Share(propt) {
  const dispatch = useDispatch()
  const [post, setPost] = useState({
    text: '',
    image: ''
  })
  const [text, setText] = useState('')
  const [image, setImage] = useState(null);

  const handleShare = () => {
    if (image == null && text == '') {
      alert('nhap gi do di')
    }
    else {
      if (image == null) {
        dispatch(addPost({
          text: text,
          image: null
        }))
      }

      else {
        const imageRef = ref(storage, `images/${image.name}`)
        uploadBytes(imageRef, image)
          .then(
            (snapshot) => {
              console.log('success');
              getDownloadURL(snapshot.ref)
                .then((url) => {
                  dispatch(addPost({
                    text: text,
                    image: url
                  }))
                });
               
            });
      }

    }
  }
 
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={(propt.myAvatar.avatar) ? propt.myAvatar.avatar : 'https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg'} alt="" />
          <input
            placeholder={`What's in your mind  ${propt.myAvatar.name}`}
            className="shareInput"
            name="text"
            onChange={(e) => { setText(e.target.value) }}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">

              <input type="file" name="file" id="file" class="inputfile"  onChange={(e)=>{setImage(e.target.files[0])}}/>
              
              <label for="file"><PermMedia htmlColor="tomato" className="shareIcon" /></label>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" onClick={() => { handleShare() }}>Share</button>
        </div>
      </div>
    </div>
  );
}