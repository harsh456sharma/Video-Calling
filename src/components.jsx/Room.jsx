import React from 'react';
import {useParams} from "react-router-dom";

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const {id} =useParams();
    let myMeeting = async (element) => {
        // generate Kit Token
         const appID = 133847962;
         const serverSecret = "3ddccb945f29b2d500185995455d2482";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,id,Date.now().toString(),"harshsharma");
   
       
        // Create instance object from Kit Token.
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         // start the call
         zp.joinRoom({
           container: element,
           sharedLinks: [
             {
               name: 'Personal link',
               url:  window.location.protocol + '//' + 
               window.location.host + window.location.pathname +
                '?roomID=' +
                77464,
                 
               
             },
           ],
           scenario: {
             mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
           },
           showScreenSharingButton: true,
         });
   
       
     };
    return(
        <div
        className="myCallContainer"
        ref={myMeeting}
      
      ></div>
    )
}
export default Room;