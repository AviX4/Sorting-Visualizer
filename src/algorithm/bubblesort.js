
export function getbubblesort(array){
    const animation =[];
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                animation.push([j,j+1,1]);
                let temp = array[j+1];
                array[j+1]=array[j];
                array[j]=temp;
            }else{
                animation.push([j,j+1,0]);
            }
        }
    }
    return animation;
}