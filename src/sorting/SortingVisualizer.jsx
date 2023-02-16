import React from "react";
import './SortingVisualizer.css'
import { getbubblesort } from "../algorithm/bubblesort";

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
            const color = c ? 'blue' : 'red';
            if(c){
                const bar1 = arraybars[x];
                const bar2 = arraybars[y];
                const b1 = bar1.style;
                const b2 = bar2.style;
                setTimeout(()=>{
                    b1.backgroundColor= color;
                    b2.backgroundColor= color;
                    let temp = b1.height;
                    b1.height = b2.height;
                    b2.height = temp;
                },i*1);
            }
            
        }
    }

    mergesort(){
        //write algo here
    }
    selectsort(){
        //write algo here
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
                        backgroundColor: "blue",
                        height: `${value}px`,
                    }}></div>
                ))}
                </div>
                <button onClick={()=>this.resetArray()}>Generate New Array</button>
                <button onClick={()=>this.mergesort()}>Merge Sort</button>
                <button onClick={()=> this.bubblesort()}>Bubble Sort</button>
            </div>

            
            
        )
    }
    
}
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + max);
}