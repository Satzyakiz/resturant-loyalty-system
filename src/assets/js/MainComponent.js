import React from "react";

// import data from "../data/data.json";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import CardComponent from "./CardComponent";

import "../css/MainComponent.css";

class MainComponent extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    showCards= () =>{
        let d = this.props.lastVisitDate;
        //d = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        let n = this.props.visitNo;
        var mainArr = []
        for(let i=0; i<=n;i++){
            var arr = this.props.foodData.filter((data) =>{
                if(data.onVisit - 1 === i)
                    return data;
            });
            mainArr.push(arr);
        }
        return mainArr.map( (e,i) => {
            if(i !== 0)
                var date = d[i-1]
            else
                date = 0
            return <CardComponent
                visitNo={i}
                data={e}
                date={date}
            />
        })
    }

    nextCard = () =>{
        let n = this.props.visitNo;
        let k = n + 1;
        if(n > 3)
            k = 0;
        var arr = this.props.foodData.filter((data) => {
            if (data.onVisit-1  === k)
                return data;
        });
        return (
            <Container fluid>
                <Card id="card-current">

                    <Card.Header style={{ background: "#0E4D92", color: "white", marginBottom: "5px" }}>
                        On your Next Visit
                    </Card.Header>
                <CardGroup>

                <Card>
                    <Card.Img variant="top" src={arr[0].imgSrc} />
                    <Card.Body>
                        <Card.Title>{arr[0].name}</Card.Title>
                        <Button variant="primary" size="md" disabled>
                            Redeem
                        </Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Happy Dining!</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={arr[1].imgSrc} />
                    <Card.Body>
                        <Card.Title>{arr[1].name}</Card.Title>
                        <Button variant="primary" size="md" disabled>
                            Redeem
                        </Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Happy Dining!</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={arr[2].imgSrc} />
                    <Card.Body>
                        <Card.Title>{arr[2].name}</Card.Title>
                        <Button variant="primary" size="md" disabled>
                            Redeem
                        </Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Happy Dining!</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            </Card>
            </Container>
        )
    }
    render(){
        // let d = this.props.lastVisitDate
        // d = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        // let n = this.props.visitNo
        // let k = n
        // const foodData1 = this.props.foodData.filter((data) =>{
        //     if(data.onVisit - 1 === k)
        //         return data
        // })
        // const foodData2 = this.props.foodData.filter((data)=>{
        //     if(k > 3)
        //         k = -1
        //     if(data.onVisit - 1 === k+1)
        //         return data
        // })
        
        return(
            <div>
                {this.showCards()}
                {this.nextCard()}
            </div>
        );
    }
}

export default MainComponent;

// <Container fluid>
//     <Card id="card-current">

//         <Card.Header style={{ background: "#0E4D92", color: "white", marginBottom: "5px" }}>
//             {n === 0 ? <h3> This is your 1st visit</h3>
//                 : <h3> This is your {n + 1} visit,last visited on {d} </h3>}
//         </Card.Header>
//         <CardGroup>

//             <Card>
//                 <Card.Img variant="top" src={foodData1[0].imgSrc} />
//                 <Card.Body>
//                     <Card.Title>{foodData1[0].name}</Card.Title>
//                     <Button variant="primary" size="md">
//                         Redeem
//                                 </Button>
//                 </Card.Body>
//                 <Card.Footer>
//                     <small className="text-muted">Happy Dining!</small>
//                 </Card.Footer>
//             </Card>
//             <Card>
//                 <Card.Img variant="top" src={foodData1[1].imgSrc} />
//                 <Card.Body>
//                     <Card.Title>{foodData1[1].name}</Card.Title>
//                     <Button variant="primary" size="md">
//                         Redeem
//                                 </Button>
//                 </Card.Body>
//                 <Card.Footer>
//                     <small className="text-muted">Happy Dining!</small>
//                 </Card.Footer>
//             </Card>
//             <Card>
//                 <Card.Img variant="top" src={foodData1[2].imgSrc} />
//                 <Card.Body>
//                     <Card.Title>{foodData1[2].name}</Card.Title>
//                     <Button variant="primary" size="md">
//                         Redeem
//                                 </Button>
//                 </Card.Body>
//                 <Card.Footer>
//                     <small className="text-muted">Happy Dining!</small>
//                 </Card.Footer>
//             </Card>
//         </CardGroup>
//     </Card>
//     <Card id="card-next">
//         <Card.Header style={{ background: "#0080FF", color: "white", marginBottom: "5px" }}
//         ><h3>On your {n + 2} visit, you will get </h3></Card.Header>
//         <CardGroup>
//             <Card>
//                 <Card.Img variant="top" src={foodData2[0].imgSrc} />
//                 <Card.Body>
//                     <Card.Title>{foodData2[0].name}</Card.Title>
//                     <Button variant="primary" size="md" disabled>
//                         Redeem
//                                 </Button>
//                 </Card.Body>
//                 <Card.Footer>
//                     <small className="text-muted">Happy Dining!</small>
//                 </Card.Footer>
//             </Card>
//             <Card>
//                 <Card.Img variant="top" src={foodData2[1].imgSrc} />
//                 <Card.Body>
//                     <Card.Title>{foodData2[1].name}</Card.Title>
//                     <Button variant="primary" size="md" disabled>
//                         Redeem
//                                 </Button>
//                 </Card.Body>
//                 <Card.Footer>
//                     <small className="text-muted">Happy Dining!</small>
//                 </Card.Footer>
//             </Card>
//             <Card>
//                 <Card.Img variant="top" src={foodData2[2].imgSrc} />
//                 <Card.Body>
//                     <Card.Title>{foodData2[2].name}</Card.Title>
//                     <Button variant="primary" size="md" disabled>
//                         Redeem
//                                 </Button>
//                 </Card.Body>
//                 <Card.Footer>
//                     <small className="text-muted">Happy Dining!</small>
//                 </Card.Footer>
//             </Card>
//         </CardGroup>
//     </Card>
// </Container>