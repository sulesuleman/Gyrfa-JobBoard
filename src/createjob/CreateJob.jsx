import React, { useState, useContext } from 'react';
import { JobContext } from '../context/JobContext';
import { Link } from 'react-router-dom';
import './style.css';
const CreateJob = () => {
    const { saveJob } = useContext(JobContext);

    const [title, setTitle] = useState('');
    const [blurb, setBlurb] = useState('');
    const [preview, setPreview] = useState('');

    const updateName = (e) => {
        setTitle(e.target.value);
    }

    const updateBlurb = (e) => {
        setBlurb(e.target.value);
    }

    const updatePreview = (e) => {
        setPreview(e.target.value);
    }

    const submitJob = e => {
        e.preventDefault();
        saveJob({ title: title, blurb: blurb, preview: preview });
    }

    return (
        <div >
            <form onSubmit={submitJob} class="form" style={{marginLeft:'auto',marginRight:'auto',}}>
					<h3 style={{alignItems:'center'}}>Create JOB</h3>
					<div class="form-holder1 " >
                        <input type="text" placeholder="Job Title" class="form-control1" 
                        name="title" value={title} onChange={updateName} />
					</div>
					<div class="form-holder1">
						<input type="text" placeholder="Description" class="form-control1"
                        name="blurb" value={blurb} onChange={updateBlurb}/>
					</div>
					<div class="form-holder1">
						<input type="text" placeholder="Preview Video" class="form-control1" style={{fontSize:'15px'}}
                        name="preview" value={preview} onChange={updatePreview}/>
					</div>
					
					<div class="form-login">
						<button class='b' type="submit">Submit</button>
                        <Link to="/">Back</Link>
					</div>
				</form>
		            
        </div>
    );
}

export default CreateJob;
