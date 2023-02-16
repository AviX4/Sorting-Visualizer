export function getselectionSort(array)
{
    let i,j,min_idx;
    let animation = [];

    for (i = 0; i < array.length-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < array.length; j++){  
   
            if (array[j] < array[min_idx]){
                min_idx = j;
            } 
            animation.push([min_idx,i,j,0]);         
        }
        // Swap the found minimum element with the first element
        animation.push([min_idx,i,j-1,1]);

        [array[min_idx],array[i]]=[array[i],array[min_idx]];

        
    }
    
    return animation;
}