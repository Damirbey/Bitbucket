import React ,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../css/activityFeed.css';
const ActivityDetail = ({activityIdSelected, onRouteChange})=>{
    /**Declaring states */
    const [callSelected, setCall] = useState([]);

    /**Fetching selected call from the server */
    useEffect(()=>{
        fetch(`https://aircall-job.herokuapp.com/activities/${activityIdSelected}`)
        .then(res=>res.json())
        .then(data=>setCall(data));
    },[])

    var dateOptions = {
     year: 'numeric', 
     month: 'long', 
     day: 'numeric' 
    }
    /**Archiving a call */
    const archiveCall = () =>{
        fetch(`https://aircall-job.herokuapp.com/activities/${activityIdSelected}`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({is_archived:true})
        }).then(res=>res.json())
        .then(data=>{alert("Archived successfully");
        onRouteChange('activity');}
        );
    }
    return(<div className="ActivityFeed">

        {
               <div>
                    <p className="line header"><strong>Call Detail</strong></p>
                    
                    <div className="callCard" onClick={()=>onRouteChange('activityDetail')}>
                        <img src="../public/images/IncomingCall.png" className="fa-phone"/>
                        <p className="callText"><strong>{callSelected.from}</strong>
                            <br/>tried to call on {callSelected.to}
                            
                        </p>
                        <p className="callTime" onClick={archiveCall}>Archive Call</p>
                    </div>
                    
                </div>
                
        
        }  
    </div>)
}

export default ActivityDetail;