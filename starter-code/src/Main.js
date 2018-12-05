import React, { Component } from 'react';
import './App.css';
import FoodBox from './FoodBox';
import listOfFoods from './foods.json';
import 'bulma/css/bulma.css';


class Main extends Component {

    state = {
        theList: listOfFoods,
        filteredList: listOfFoods,
        todaysFoods: [{name: 'pasta', calories: 90000}, {name: 'adf', calories: 10000}],
        // goal is to push tings from filteredList into todaysFoods array
        nameInput: '',
        // above will always show up in the Name input section on form on page.
        calories: '',
        image:    '',
        formShowing: false,
        searchInput: ''

    }


      // render FoodBox in a loop.
      showListOfFoods = () =>{
          return(

              this.state.filteredList.map((eachFoodItem)=>{
                return (<FoodBox whatToDoWhenIClickTheButton = {this.addToMenu} theFoodForThisParticularFoodbox = {eachFoodItem} />)
                  // not going to return (<div> {eachFoodItem.name}</div>)
// props used to pass information from a parent component into a child component.
              })


          )

      }



          updateNameInput = (theEvent) =>{

              this.setState({[theEvent.target.id]: theEvent.target.value}, ()=>{
                // how to use a variable as a key in an object, is put it in square brackets.
                console.log(theEvent.target, this.state);

              })

          }
          // setState is asynchronous, may lag behind 1 step.

            addTheFood = () =>{
              e.preventDefault();
                  if(this.state.nameInput === '' || this.state.caloriesInput === '' || this.state.imageInput);
                const newFood = {};
                newFood.name = this.state.nameInput;
                newFood.calories = this.state.caloriesInput;
                newFood.image = this.state.imageInput;
            // create a new food and push it into the array.
            
// first create a copy of the food list when changing the code.
                const copyOfFoodList = [...this.state.theList];
                copyOfFoodList.unshift(newFood);
                
                this.setState({
                  theList: copyOfFoodList,
                  caloriesInput: '',
                  imageInput: '',
                  formShowing: true
                });

                  this.toggleForm()
// to clear out the inputs, add them to the setState object.
            }


              showForm = () =>{
                if(this.state.formShowing){
                  return 
                        <form onSubmit={(e) => this.addTheFood(e)}>

                        <h2>add a new food to the list</h2>
                        <label>Name</label>
                        <input id="nameInput" type="text" value={this.state.nameInput} onChange = {(e)=>this.updateNameInput(e) />

                        <label>Calories</label>
                        <input id="caloriesInput" type="number" value={this.state.caloriesInput} onChange = {(e)=>this.updateCaloriesInput} />

                        <label>Image</label>
                        <input id="imageInput" type="text" value={this.state.imageInput} onChange = {(e)=>this.updateImageInput(e)} />

                      
                        </form>
      
      
      
                      {this.showListOfFoods()}

                }
              }

              toggleForm = () =>{

                  this.setState({formShowing:})

              }

              searchForFood = (e) => {
                this.setState({e.target.id: e.target.value}, ()=>{

                  
                  const fullList = [...this.state.theList];
                    // above is copy of code to make changes to. for this different state.
                    
                    // loop through partialList, and for each loop look below
                    const newFilteredList = fullList.filter((eachFood)=>{
                      return eachFood.name.includes(this.state.searchInput)
                      // each loop, filter for each food, then check that it includes in the name, the characters that desired.
                    })

                      this.setState({filteredList: newFilteredList})
                      
                  })
              }

                addToMenu = (foodToAdd, quantityToAdd) => {
                    const copyOfList = [...this.state.todaysFoods];
                    foodToAdd.quantity = quantityToAdd;

                    copyOfList.push(foodToAdd);

                    this.setState({todaysFoods: copyOfList});



                }


                showTodaysFoods = () =>{
                  return

                      <div>
                  this.state.todaysFoods.map((eachFoodItem)=>{
                    return (<FoodBox theFoodForThisParticularFoodbox = {eachFoodItem} />)
                      // not going to return
                      <div>
                         {eachFoodItem.name}
                         {eachFoodItem.calories}
                         total calories: {eachFoodItem.calories} * {eachFoodItem.quantity}
                     </div>)
    // props used to pass information from a parent component into a child component.
                  })
                  
                }



// render section ALWAYS REQUIRES A DIV or HTML element.
      render(){
          return(

              <div>
                    <input className="input" placeholder="Search for foods.. " type="text" id="searchInput" value={this.state.searchInput} onChange = {(e)=>this.searchFormFood(e)} />

              <button className="button is-info">Submit</button>
                  {this.showForm()}
                      <div>



                  {this.showListOfFoods()}
                  
                    <div>
                      {this.showTodaysFoods()}
                     </div>

              </div>
              </div>


          )

      }



}



export default Main;