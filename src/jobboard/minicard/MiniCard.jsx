import React from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import {Row, Col} from 'antd';
import ReactPlayer from "react-player";
import'./MiniCard.css';
const MiniCard = (props) => {
  return ( 
    <Row>
       <Col>
    <div
              class="card"
              style={{ width: "18rem", height: "25rem", marginBottom: "3%" }}
            >
              <ReactPlayer
                class="card-img-top"
                width="20"
                height="20"
                url={props.job.preview}
                playing={false}
              />

              <div class="card-body">
                <h4 class="card-title">{props.job.title}</h4>
                <p style={{ marginBottom: "3rem" }} class="card-text">
                  {props.job.blurb}
                </p>
                <Link
                  to={`detail/${props.id}`}
                  style={{
                    border: "1px solid black",
                    width: "100%",
                    height: "100%",
                    padding: "10px",
                    color: "white",
                    backgroundColor: "maroon",
                  }}
                >
                  Go somewhere
                </Link>
              </div>
            </div>
                        
     </Col>
     </Row> 


    //  
    //   <List
    //   grid={{ column: 4 }}
    //   dataSource={props.job}
    //   renderItem={(item) => (
    //       <List.Item>
    //         <div style={{justifyContent:"Center", alignItems:"Center",marginLeft:"100%"}}>
    //         <div
    //           class="card"
    //           style={{ width: "18rem", height: "25rem", marginBottom: "3%" }}
    //         >
    //           <ReactPlayer
    //             class="card-img-top"
    //             width="20"
    //             height="20"
    //             url={item.preview}
    //             playing={false}
    //           />

    //           <div class="card-body">
    //             <h4 class="card-title">{item.title}</h4>
    //             <p style={{ marginBottom: "3rem" }} class="card-text">
    //               {item.blurb}
    //             </p>
    //             <Link
    //               to={`detail/${item.id}`}
    //               style={{
    //                 border: "1px solid black",
    //                 width: "100%",
    //                 height: "100%",
    //                 padding: "10px",
    //                 color: "white",
    //                 backgroundColor: "maroon",
    //               }}
    //             >
    //               Go somewhere
    //             </Link>
    //           </div>
    //         </div>
    //         </div>
    //       </List.Item>
    //   )}
    // />
    // </Col>
    // </Row>
  );
};

export default MiniCard;
