import {useState} from 'react';
import { BackgroundComponent } from '../../Background/background-component';

const WorkDetails = () => {
    const [farmName, setFarmName] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <div>
    <div><BackgroundComponent/></div>
    <div>
    <p className='work-details-title'>Work Details</p>
    <img alt="work-details"/>
    <label> Farmer Name</label>
    <input type='text' placeholder='John Champion' value={farmName} onChange={(e)=> setFarmName(e.target.value)}/>
    <label>Location</label>
    <select value={selectedRegion}>onChange={(e)=> setSelectedRegion(e.target.value)}
    <option value="" disabled selected>Select a region</option>
    <option value="Lagos"> Lagos</option>
    <option value="Kano">Kano</option>
    <option value="Abuja">Abuja</option>
    <option value="Port-Harcourt">Port-Harcourt</option>
    </select>
    </div>
    </div>
  )
}

export default WorkDetails;