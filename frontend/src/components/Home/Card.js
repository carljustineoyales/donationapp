import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {strapi} from '../functions';
import Moment from 'react-moment'
export class Card extends Component {
  
  

  render() {
    
    
    const {title, description, id, author,goal,created_at} = this.props.card;
    
    return (
      <div>
        <div className="card mb-3">
          <div className="card-body">
          <Link to={`/campaign/${id}`} className="card-link"><h5 className="card-title">{title}</h5></Link>
            <h6 className="card-subtitle text-muted">Created By <strong>{author.first_name} {author.last_name}</strong></h6>
          </div>
          <Link to={`/campaign/${id}`} className="card-link">
          <section
                    style={{
                    backgroundImage: "url(" + strapi+this.props.card.image[0].url + ")",
                    height: "20em",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "50% 50%",
                    backgroundSize: "cover"
                  }}></section>
                  </Link>
          <div className="card-body">
          <h5>Fund Goal: {goal}</h5>
          {
            (description.length > 50) ? (<p className="card-text">{description.split(" ").slice(0,50).join(" ")} [...]</p>) : (<p className="card-text">{description}</p>)
          }
          </div>
          <div className="card-body">
            <Link to={`/campaign/${id}`} className="card-link">Read More..</Link>
          </div>
          <div className="card-footer text-muted">
          <span>Created <Moment fromNow>{created_at}</Moment></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
