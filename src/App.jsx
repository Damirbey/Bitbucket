import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Activity from './components/Activity.jsx';
import ActivityDetail from './components/ActivityDetail.jsx';

const App = () => {
  const [route, setRoute] = useState('');
  const [activityIdSelected,setActivityId] = useState('');

  const idSelected=(id)=>{
    setActivityId(id);
  }
  const onRouteChange = (newRoute) => {
    setRoute(newRoute);
  }

  return (
    <div className='container'>
      <Header onRouteChange={onRouteChange}/>
      {
        route=='activityDetail' ? <ActivityDetail onRouteChange={onRouteChange} activityIdSelected={activityIdSelected} /> : 
        <Activity idSelected={idSelected} onRouteChange={onRouteChange}/>
      }
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
