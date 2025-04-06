/*
3Sum
Solved

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

    The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

    Example 1:

Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]

Explanation:
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].

    Example 2:

Input: nums = [0,1,1]

Output: []

Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]

Output: [[0,0,0]]

Explanation: The only possible triplet sums up to 0.
*/

function threeSum(nums) {
    let sum = null;
    let flagOuter = 0;
    let flagInner = 1;
    const sumList = [];
    const uniqueArr = [];
    while (flagOuter < nums.length - 2) {
        sum += nums[flagOuter];
        while (flagInner < nums.length - 1) {
            sum += nums[flagInner];
            for (let j = flagInner+1; j < nums.length; j++) {
                if(sum + nums[j] === 0) {
                    sumList.push([nums[flagOuter], nums[flagInner], nums[j]]);
                    break;
                }
            }
            sum = nums[flagOuter]
            flagInner++
        }
        sum = null
        flagOuter++;
        flagInner = flagOuter + 1
    }
    while(sumList.length > 0){
        uniqueArr.push(sumList[0]);
        const shiftValue = sumList.shift();
        for (let i = 0; i < sumList.length;) {

            if(sumList.some((innerArr) => {
                return  innerArr.sort().every((element,index)=>(element === shiftValue.sort()[index]))
            })){
                const duplicateArrayIndex = sumList.findIndex((innerArr) => {
                    return innerArr.sort().every((element,index)=>(element === shiftValue.sort()[index]))
                });
                sumList.splice(duplicateArrayIndex,1)
            }
            else {
                break;
            }
        }
    }
    return uniqueArr;
}

nums=[-1,0,1,2,-1,-4,-2,-3,3,0,4]

threeSum(nums)

