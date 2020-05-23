import React from "react";
import MiniCard from "./minicard/MiniCard";
import { JobContext } from "../context/JobContext";
import {Pagination} from 'antd';
import "../header/Header.css";
class JobBoard extends React.Component {

  render() {
    return (
      <div class="is-preload">
        <section id="banner">
          <div class="inner">
            <h1>Gyrfa Job Board</h1>
            <p>A Platform that facilities with all kinds of teaching Videos.</p>
          </div>
        </section>
        <section class="wrapper">
          <div class="inner">
            <header class="special">
              <h2 id="h">Gyrfa Job Board</h2>
              <p id="i">
                A Platform that facilities with all kinds of teaching Videos.
              </p>
            </header>
            <div class="highlights">
                
                <JobContext.Consumer>
                                {(context) => (
                                    <React.Fragment>
                                        {Object.keys(context.state.jobs).map((job, i) => (

                                            <MiniCard key={i} id={i} job={context.state.jobs[job]}  />
                                        )
                                        )
                                        }
                                    </React.Fragment>
                                )}
                            </JobContext.Consumer> 
            
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default JobBoard;
