import React, {Component} from React;
import 'bulma/css/bulma.css';
import './App.css';

class FoodBox extends Component{

      render(){
        console.log('-=-=-=-=-=-=-=-=-', this.props.theFoodForThisParticularFoodBox)
        
        
        
        return(
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src="https://i.imgur.com/eTmWoAN.png" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.theFoodForThisParticularFoodBox.name}</strong> <br />
          <small>{this.props.theFoodForThisParticularFoodBox.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value="1"
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>








        )
      }












}



export default FoodBox;