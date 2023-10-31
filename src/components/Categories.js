import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategories, getAllCat, getVideo, updateCategory } from '../services/allapis';
import { Trash2 } from 'react-feather';



function Categories() {

  //state to hold input,id and video array
  const [catInputs,setCatInputs]=useState({
    id: '',
    name: "",
    videos: []
  })

  const [categories,setCategories]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
 const setInputs=(e)=>{
const {name,value}=e.target
setCatInputs({...catInputs,[name]:value})
 }
 

 const addData=async()=>{
let id =uniqid()
setCatInputs({...catInputs,["id"]:id})
 

const {name}=catInputs
if(name==""){
  toast.error('please provide caption', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    }); 
  }
else{
  //api call
const result=await addCategory(catInputs)
if(result.status>=200 && result.status<300){
setShow(false);
getAllCategories()
toast.success(`${result.data.name} added`, {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  }); 

}
}
}
//  console.log(catInputs);
const getAllCategories=async()=>{
  const result=await getAllCat()

  if(result.status>=200 && result.status<300){
    setCategories(result.data);
  }
 
}
console.log(categories);

const removeCategories=async(id)=>{
 const result=await deleteCategories(id)
 if(result.status>=200 && result.status<300){
  //refresh category list
  getAllCategories()
 }
}

useEffect(()=>{
getAllCategories() 
},[])

const dragOver=(e)=>{
  e.preventDefault()
console.log("dragged overr the category....");
}

const dropped=async(e,id)=>{
  console.log('dropped....cat Id'+id);
  //video id access
  const videoId=e.dataTransfer.getData('cardId')
  console.log(videoId);
//access video data from backend
  const {data}=await getVideo(videoId)
  console.log(data);

  //select dropped category from all categories
  const selectedCategory=categories.find(i=>i.id==id)
  console.log(selectedCategory);
//update category object with video data
  selectedCategory.videos.push(data)
  console.log(selectedCategory);
//api call to update the changed category in backend 
 await  updateCategory(id,selectedCategory)
getAllCategories()
}


  return (
    <div>
            <Button className='w-100 bg-dark mt-3' variant="light" onClick={handleShow}>
       Add Category
      </Button>
 {categories.length>0?(
         categories.map(i=>(
          <div droppable
          onDragOver={(e)=>dragOver(e)}
          onDrop={(e)=>dropped(e,i?.id)}

          className='border mt-3 p-3 '>
<div className='bg-dark container'>
              <p><span className='fs-4 text-white bg-dark'>{i.name}</span></p>
  
</div>            <div className='text-end text-danger'>
              <Trash2 size={55} className='btn' onClick={()=>{removeCategories(i.id)}}></Trash2>
              </div>
              {
                i.videos.map(j=>(

                    
  <div className='d-flex  border  mb-2 ' style={{textAlign:'justify'}}>
    <img src={j.cover_image} alt=""  
    style={{height:'80px',width:'100px',borderRadius:'5px',objectFit:'cover'}} className=' border  '/>
    <h6 style={{}} className='mt-3 ps-2 '>{j.caption}</h6>
<div className='text-end ps-1'>
      <Trash2  className=' mt-3' ></Trash2>
   
</div>    
  </div>                
  
))
              }
          </div>
         ))
 ):<h3>No Categories Added Yet</h3>

 }
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton className='bg-black  mt-2'>
      <Modal.Title ><h4>Add New Category</h4></Modal.Title>

</Modal.Header>
    <Modal.Body className='bg-black border '>
    <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
        className="mb-3 text-dark"
      >
        <Form.Control onChange={(e)=>setInputs(e)} name="name"  type="text" />
      </FloatingLabel>
      

    
    </Modal.Body>
    <Modal.Footer className='bg-black border'>
      <Button variant="danger" onClick={handleClose}>
        Close
      </Button>
      <Button variant="light" onClick={addData}>
       Add 
      </Button>
    </Modal.Footer>
  </Modal> 
  <ToastContainer />

      </div>
  )
}

export default Categories