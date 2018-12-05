import React, { Component } from 'react';
import './App.css';
import FoodBox from './FoodBox';
import listOfFoods from './foods.json';
import 'bulma/css/bulma.css';


class Main extends Component {

    state = {
        theList: listOfFoods
        nameInput: '',
        // above will always show up in the Name input section on form on page.
        calories: '',
        image:    ''


    }


      // render FoodBox in a loop.
      showListOfFoods = () =>{
          return(

              this.state.theList.map((eachFoodItem)=>{
                return (<FoodBox theFoodForThisParticularFoodbox = {eachFoodItem} />)
                  // not going to return (<div> {eachFoodItem.name}</div>)
// props used to pass information from a parent component into a child component.
              })


          )

      }



          updateNameInput = (theEvent, thingToUpdate) =>{

              this.setState({nameInput: theEvent.target.value}, ()=>{
                console.log(theEvent.target, this.state);

              })

          }
          // setState is asynchronous, may lag behind 1 step.



// render section ALWAYS REQUIRES A DIV or HTML element.
      render(){
          return(

              <div>

                  <form>

                      <h2>add a new food to the list</h2>
                      <label>Name</label>
                      <input type="text" value={this.state.nameInput} onChange = {(e)=>this.updateNameInput(e) />
                      
                      <label>Calories</label>
                      <input type="number" />
                      
                      <label>Image</label>
                      <input type="text" />

                      <button className="button is-info">Submit</button>
                      
                  </form>



                {this.showListOfFoods()}

              </div>


          )

      }



}



export default Main;