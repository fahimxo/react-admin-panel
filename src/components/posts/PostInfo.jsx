import React ,{useState}from "react";
import {Modal,ModalBody,ModalHeader} from 'reactstrap'

const PostInfo = ({ info }) => {
  const[modal,setModal]=useState(false)
  const toggle=()=>setModal(!modal)
  return (
    <>
      <div className="col-md-4 p-3">
        
        <div className="card ">
          <div className="card-header bg-primary text-white pb-2 card-title post-title">{info.title}</div>
          <div className="card-body post-body">{info.body}</div>
          <div className="card-footer">
            <button className="btn btn-outline-info btn-sm" onClick={toggle}>ادامه..</button>

            <Modal centered isOpen={modal} toggle={toggle}>
                <ModalHeader className="bg-primary">{info.title}</ModalHeader>
                <ModalBody>
                    {info.body}
                </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </>
  ); 
};

export default PostInfo;
