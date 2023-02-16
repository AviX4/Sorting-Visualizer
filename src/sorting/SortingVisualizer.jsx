import React from "react";
import './SortingVisualizer.css';
import { getbubblesort } from "../algorithm/bubblesort";
import { getMergeSort } from "../algorithm/mergesort";
import { getselectionSort } from "../algorithm/selectsort";

const ANIMATION_SPEED = 1;
const ARRAY_LENGTH = 335;
export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            array : [],
        };
        
    }
    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array =[];
        for(let i=0;i<300;i++){
            array.push(randomIntFromInterval(5,350));
        }
        console.log(array);
        this.setState({array});
        
    }

    bubblesort(){
        const animation = getbubblesort(this.state.array);
        for(let i=0;i<animation.length;i++){
            const arraybars = document.getElementsByClassName('array-bar');
            const [x,y,c] = animation[i];
            const bar1 = arraybars[x].style;
            const bar2 = arraybars[y].style;
            
            setTimeout(()=>{
                if(c){
                    [bar1.height,bar2.height] = [bar2.height,bar1.height];
                    bar1.backgroundColor = "black";
                    bar2.backgroundColor = "black";
                }
                
                          
            },i*ANIMATION_SPEED)
            setTimeout(()=>{
                bar1.backgroundColor = "pink";
                bar2.backgroundColor = "pink";
            },(i*ANIMATION_SPEED)+5)
        }
    }
    selectsort(){
        const animations = getselectionSort(this.state.array);
        console.log(animations[333], animations[334] , animations[335]);
        for(let i=0;i<animations.length;i++){
            const arraybars = document.getElementsByClassName('array-bar');
            const [x,y,z,c]= animations[i];
            const bar1 = arraybars[x].style;
            const bar2 = arraybars[y].style;
            const bar3 = arraybars[z].style;         
            setTimeout(()=>{
               if(c){
                    [bar1.height,bar2.height] = [bar2.height,bar1.height];
                    bar1.backgroundColor = "red"
               }
               bar2.backgroundColor = "black";
               bar3.backgroundColor = "red";
                 
            },i*ANIMATION_SPEED)
            setTimeout(()=>{
                bar2.backgroundColor ="pink";
                bar3.backgroundColor = "pink";
            },(i*ANIMATION_SPEED)+5)
            
        }
    }
    mergeSort() {
        const animations = getMergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [x,y] = animations[i];
            const b1 = arrayBars[x].style;
            const b2 = arrayBars[y].style;
            const color = i % 3 === 0 ? "black" : "pink";
            setTimeout(() => {
              b1.backgroundColor = color;
              b2.backgroundColor = color;
            }, i * ANIMATION_SPEED);
          } else {
            setTimeout(() => {
              const [x, newHeight] = animations[i];
              const b1 = arrayBars[x].style;
              b1.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED);
          }
        }
    }
    
    render(){
        const {array} = this.state;
        
        console.log(array);
        return(
            <div class="array-container">
                <div>
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                        backgroundColor: "pink",
                        height: `${value}px`,
                    }}></div>
                ))}
                </div>
                <button onClick={()=>this.resetArray()}>Generate New Array</button>
                <button onClick={()=>this.mergeSort()}>Merge Sort</button>
                <button onClick={()=> this.bubblesort()}>Bubble Sort</button>
                <button onClick={()=> this.selectsort()}>Selection Sort</button>

            </div>

            
            
        )
    }
    
}
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + max);
}