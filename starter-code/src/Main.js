import React, { Component } from 'react';
import './App.css';
import FoodBox from './FoodBox';
import listOfFoods from './foods.json';


class Main extends Component {

    state = {
        theList: listOfFoods



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


// render section ALWAYS REQUIRES A DIV
      render(){
          return(

              <div>

                {this.showListOfFoods()}

              </div>


          )

      }



}



export default Main;