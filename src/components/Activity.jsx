import React ,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../css/activityFeed.css';
const Activity = ({onRouteChange, idSelected})=>{
    /**Declaring states */
    const [allCalls, setCalls] = useState([]);

    /**Fetching all calls from the server */
    useEffect(()=>{
        fetchAllCalls();
    },[]);
    
    const fetchAllCalls=()=>{
        fetch('https://aircall-job.herokuapp.com/activities')
        .then(res=>res.json())
        .then(data=>setCalls(data));
    }

    var dateOptions = {
     year: 'numeric', 
     month: 'long', 
     day: 'numeric' 
    }

    const onActivityClick = (id)=>{
        idSelected(id);
        onRouteChange('activityDetail');
    }

    const resetAll = ()=>{
        fetch('https://aircall-job.herokuapp.com/reset')
        .then(res=>res.json())
        .then(data=>{alert("All Calls are reset");
            fetchAllCalls();
        });
    }
    return(<div className="ActivityFeed">
        <p className="header" onClick={resetAll}>Reset All</p>
        {
          allCalls.map((call,i)=>{
              if(!call.is_archived){
                return <div key={i}>  
                    <p className="line">{new Date(call.created_at).toLocaleDateString('en-US', dateOptions)}</p>
                    <div className="callCard" onClick={()=>onActivityClick(call.id)}>
                        <img src="../public/images/IncomingCall.png" className="fa-phone"/>
                        <p className="callText"><strong>{call.from}</strong>
                            <br/>tried to call on {call.to}
                        </p>
                        <p className="callTime">{new Date(call.created_at).toLocaleTimeString([],{hour:'2-digit'})}</p>
                    </div>
                </div>
                }
          })
        }  
    </div>)
}

export default Activity;