import React from 'react';

class Card extends React.Component {
   render() {
     var {title, paragraph, image} = this.props;
     return (
       <div>
         <h2>{title}</h2>
         <p>{paragraph}</p>
         <h4 className="img">
           <img src={image} alt="myimages"/>
          </h4>
       </div>
     );
   }
}

export default Card;
