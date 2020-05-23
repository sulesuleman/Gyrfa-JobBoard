import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './DetailPage.css';

const DetailPage = ({match}) => {
    const { getJob } = useContext(JobContext);
    const job = getJob(match.params.id);

    return(
        <div>
            <div className='player-wrapper'>
                <ReactPlayer 
                    className='react-player'
                    height='100%' 
                    width='100%' 
                    url={job.preview} 
                    playing={false} />
            </div>
            <div>
                <h3 id="title">{job.title}</h3>
            </div>
            <div style={{marginBottom:"2%",paddingLeft:"1%"}}>
                <p style={{fontSize:20,}}>{job.blurb}</p>
            </div>
            <div>
                <Link style={{border:'1px solid black',width:'100%',height:'100%',padding:'5px',paddingLeft:'10px',paddingRight:'10px',color:'white',backgroundColor:'maroon',marginLeft:"2%" }} to={'/'}>Back</Link>
            </div>
        </div>
    );
}

export default DetailPage;