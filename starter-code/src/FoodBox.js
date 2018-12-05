import React, {Component} from React;
import 'bulma/css/bulma.css';
import './App.css';

class FoodBox extends Component{

        state = {
            quantity: 1,



        }

        updateQuantity = (theEvent) =>{

          this.setState({[theEvent.target.id]: theEvent.target.value}, ()=>{
            // how to use a variable as a key in an object, is put it in square brackets.

          })

      }



      render(){
        console.log('-=-=-=-=-=-=-=');      
        
        
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
            id ="quantity"
            className="input"
            type="number" 
            value={this.state.quantity}
            onChange={()e => this.updateQuantity(e)}
          />
        </div>
        <div className="control">
          <button onClick={() => this.props.whatToDoWhenIClickTheButton(this.props.theFoodForThisParticularFoodBox)} className="button is-info">
          {/* props communicate variables between components. */}
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