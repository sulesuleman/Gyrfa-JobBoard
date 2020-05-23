import React, { createContext } from "react";
import { Component } from "react";
import { jobEndpoint } from "../const.js";
import jwt from "jsonwebtoken";

export const JobContext = createContext();

export class JobProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [
        {
          id: 0,
          title: "Scrum Master",
          blurb:
            "The Scrum Master is the Agile Ninja dedicated to team improvement",
          preview: "https://www.youtube.com/watch?v=R3hpmD9dMHg",
        },
        {
          id: 1,
          title: "Scrum Master 4",
          blurb:
            "The Scrum Master is the Agilist Ninja dedicated to team improvement",
          preview: "https://www.youtube.com/watch?v=R3hpmD9dMHg",
        },
        {
          id: 2,
          title: "Scrum Master 5",
          blurb:
            "The Scrum Master is the Agilist Ninja dedicated to team improvement",
          preview: "https://www.youtube.com/watch?v=R3hpmD9dMHg",
        },
        {
          id: 3,
          title: "Scrum Master Updated",
          blurb:
            "The Scrum Master is the Agilist Ninja dedicated to team improvement",
          preview: "https://www.youtube.com/watch?v=R3hpmD9dMHg",
        },
        {
          id: 4,
          title: "Intern",
          blurb: "The intern makes coffee",
          preview: "https://www.youtube.com/watch?v=35lXWvCuM8o\u0026t=1317s",
        },
      ],
    };

    this.addJobToState = this.addJobToState.bind(this);
    this.getJob = this.getJob.bind(this);
    this.saveJob = this.saveJob.bind(this);
  }

  async componentDidMount() {
    const authorization = this.generateAuthorization({});
    // const fetchlist = await fetch(`${jobEndpoint}/api/jobs`, {
    //     headers: new Headers({
    //         "Authorization": `Bearer ${authorization}`
    //     }),
    // }).then(function(response) {
    //     if (!response.ok) {
    //         console.log("Hit an error");
    //         console.error(response.statusText);
    //     }
    //     return response.json()
    // });
    // const jobs = ;
    this.state.jobs.forEach((job) => {
      this.addJobToState(job);
    });
  }

  async saveJob(job) {
    try {
      const postJob = await fetch(`${jobEndpoint}/api/jobs`, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(job),
      });

      //const returnValue = await postJob.json();
    } catch (error) {
      console.error(error);
    }
  }

  generateAuthorization(payload) {
    return jwt.sign(payload, "GYRFAjobBOARD", { algorithm: "HS256" });
  }

  getJob(id) {
    return this.state.jobs[id];
  }

  addJobToState(job) {
    this.setState({
      jobs: {
        ...this.state.jobs,
        [job.id]: {
          preview: job.preview,
          blurb: job.blurb,
          title: job.title,
        },
      },
    });
  }

  render() {
    return (
      <JobContext.Provider
        value={{
          state: this.state,
          addJob: this.addJob,
          getJob: this.getJob,
          saveJob: this.saveJob,
        }}
      >
        {this.props.children}
      </JobContext.Provider>
    );
  }
}
