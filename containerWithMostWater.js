/*
Container With Most Water

Solved

You are given an integer array heights where heights[i] represents the height of the ithith bar.

    You may choose any two bars to form a container. Return the maximum amount of water a container can store.

    Input: height = [1,7,2,5,4,7,3,6]

Output: 36

Example 2:

Input: height = [2,2,2]

Output: 4

*/


function maxArea(heights) {
    const containerLength = heights.length
    let gap = 1
    const areaArray = []
    while(gap <= heights.length){
        for (let i = 0 ; i < containerLength; i++) {
            if(i+gap === containerLength) break
            areaArray.push(heights[i]<heights[i+gap] ? heights[i] * gap : heights[i+gap] * gap);
        }
        gap++;
    }
    return areaArray.sort((a,b) => b - a)[0];
}

height = [1,7,2,5,4,7,3,6]

console.log(maxArea(height))