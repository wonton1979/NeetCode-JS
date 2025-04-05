/*
Longest Consecutive Sequence
Solved

Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

    A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

    You must write an algorithm that runs in O(n) time.

    Example 1:

Input: nums = [2,20,4,10,3,4,5]

Output: 4

Explanation: The longest consecutive sequence is [2, 3, 4, 5].

    Example 2:

Input: nums = [0,3,2,5,4,6,1,1]

Output: 7

Constraints:

    0 <= nums.length <= 1000
    -10^9 <= nums[i] <= 10^9
*/





function longestConsecutive(nums) {
    if(nums.length === 0){
        return 0
    }
    const consecutiveArrays = [];
    let consecutiveArray = [];
    let flag = 0;
    const sortedNums = Array.from(new Set(nums.sort((a,b)=>{ return a-b})))
    while (flag !== sortedNums.length) {
        for(let i = flag; i < sortedNums.length; i++){
            if(i === 0){
                consecutiveArray.push(sortedNums[i]);
                flag++;
                if(sortedNums.length === 1){
                    consecutiveArrays.push(consecutiveArray);
                }
            }
            else{
                if((sortedNums[i] - sortedNums[i-1] === 1)){
                    consecutiveArray.push(sortedNums[i]);
                    flag++;
                }
                else {
                    consecutiveArrays.push(consecutiveArray);
                    consecutiveArray = [sortedNums[i]];
                    flag = i+1;
                    break;
                }
                if(flag === sortedNums.length){
                    consecutiveArrays.push(consecutiveArray);
                    consecutiveArray = [sortedNums[i]];
                    flag = i+1;
                    break;
                }
            }
        }
    }
    return consecutiveArrays
}

console.log(longestConsecutive([0]))