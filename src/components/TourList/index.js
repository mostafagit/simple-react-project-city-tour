import React, { Component } from "react"
import Tour from "../Tour/Tour";
import "./tourlist.scss"
import {tourData} from "../../tourData"

class TourList extends Component {

    state = { 
        tours : tourData
      }
      removeTour = (id) =>{
        const toursFilter = this.state.tours.filter(item=>item.id != id)
        this.setState({tours:toursFilter})
      }
    render() { 

        const {tours} = this.state
        return (
            <section className="tourlist">
{this.state.tours.length>0 ?
    (tours.map(tour =><Tour 
        key={tour.id} tour={tour} removeTour={this.removeTour}
        />))
:
<div className="image-travel">
    <img src="/img/travel.jpg" alt="travel-image" />
</div>

}
            

            </section>

        );
    }
}
 
export default TourList;