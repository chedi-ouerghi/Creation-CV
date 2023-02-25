import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delete_cv, get_one_cv, get_cv } from '../../../../redux/Action/CvAction';
import CvCard from "./CvCard";
import './card.css'
import { Box, Button, Icon, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillEdit,  AiOutlineDownload, AiTwotoneDelete } from "react-icons/ai";

const HomeCards = () => {
      const dispatch = useDispatch();
        // get--cv 
  const cv = useSelector((state) =>state.cvreducer.Cvs);

//   console.log(cv)
// console.log(cv,'curent')
  useEffect(() => {
    dispatch(get_cv());
  }, [dispatch]);

    // delete 
  const handleDelete = (id) => {
  // console.log('Deleting cv with ID:', id);
  // console.log('List of cvs:', cv);

  if (window.confirm('Are you sure you want to delete this cv?')) {
    dispatch(delete_cv(id));
  }
};
const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);

const handleOpenDrawer = (item) => {
  setSelectedItem(item)
  setIsDrawerOpen(true);
};
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className='linkbtn'>
      <Link to="/index">
      <Button style={{background: 'blue',color:'white'}}>create a cv</Button>
    </Link>
    </div>
         <div className="cards">

          {cv.map((item,index) => (
    <div className="card-container" key={index} onClick={() => handleOpenDrawer(item)}>
      <CvCard cv={item} />
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
  {selectedItem && `${selectedItem.Firstname} ${selectedItem.Lastname}`}
         </DrawerHeader>
          <DrawerBody>
      <CvCard cv={selectedItem} />
        <DrawerFooter borderTopWidth='1px'>
           <div style={{display:'inline-flex',paddingInline:"4%",gap:"5%"}}> 
                  <Link to={{pathname: `/edit/${selectedItem?._id}`}}>

            <Button variant='outline' mr={3} onClick={()=>dispatch(get_one_cv(selectedItem?._id))}>
              <AiFillEdit/>  EDIT
            </Button>
            </Link>
            <Button colorScheme='blue' style={{float:"right",gap: '11px'}}><AiOutlineDownload/>downlowd</Button>
          <Button
            variant='danger'
            className='btn-sm'
            onClick={() => handleDelete(selectedItem._id)}
            style={{border: '1px white solid'}}
          >
            <AiTwotoneDelete style={{width:"50px"}} /> DELETE
          </Button>
         </div>
          </DrawerFooter>
          </DrawerBody>
        </DrawerContent>
        
      </Drawer>
      

        </div>
      ))}
      
   </div>
   </>
  )
}

export default HomeCards