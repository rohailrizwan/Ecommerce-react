import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MYbtns from './SMbtn'

// const ShowMessage = ({ message }) => {
//   const notify = () => toast(message);

//   return (
//     <div>
//       <button onClick={notify}>Show Message</button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ShowMessage;
type def={
    message:string
}

 export default function ShowMessage(props:def){
    const notify=()=>{
        toast(props.message)
    }
    return(
        <>
        <div>
        <MYbtns val={"click here"} click={notify}/>
        <ToastContainer/>
        </div>
        </>
    )
}