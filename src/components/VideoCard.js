import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Trash2 } from "react-feather";
import { addHistory, deleteVideo } from "../services/allapis";
import uniqid from 'uniqid'
import { format } from "date-fns";

function VideoCard({video,deletecard}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
  //body
//id
var id=uniqid()
//title
var video_title=video.caption
//url
var url=video.video_url

//date
var date=format(new Date(),'yyyy-MM-dd h:mm:ss a')
// console.log(date);
const body={id,video_title,url,date}
if(body){
  const result= await addHistory(body)
  console.log(result);
}

  //api call

  }

  const handleDelete=async(id)=>{
    const result=await deleteVideo(id)
    // console.log(result);
    if(result.status>=200 && result.status<300)
    {
      deletecard(result.data)
    }
  }
  const dragStart=(e,id)=>{
    console.log("drag started ...source card id"+id);
    //store dragged data
    e.dataTransfer.setData("cardId",id)
  }

  return (
    <div>
    
            <Card draggable onDragStart={(e)=>dragStart(e,video.id)}  className="border  mt-3" >
              <Card.Img
                onClick={handleShow}
                style={{  width: "100%",height:'140px',objectPosition:'center ',}}
                variant="top"
                src={video.cover_image}
              />
              <Card.Body>
                <Card.Title className="text-white ">
                  <h5 >{video.caption} </h5>
      
                  <div className="text-end">
                    <Trash2 onClick={()=>handleDelete(video.id)}   size={50} className="text-danger btn "></Trash2>
                    {/* <i class="fa-solid fa-trash-can ms-5 fa-1x"></i> */}
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-black border">
          <iframe
            width="100%"
            height="238"
            src={video.video_url}
            title="ഉയർന്ന ശമ്പളത്തിൽ 𝒍𝑻 ജോലി   ആഗ്രഹിക്കുന്നുവോ?"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer className="bg-black border">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default VideoCard;
