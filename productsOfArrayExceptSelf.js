/*
Products of Array Except Self
Solved

Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

    Each product is guaranteed to fit in a 32-bit integer.

    Follow-up: Could you solve it in O(n)O(n) time without using the division operation?

    Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]

Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
*/


function productExceptSelf(nums) {
    return  nums.map((eachNum,index)=>{
        let product = 1;
        nums.forEach((num,inner_index)=>{
            if(index !== inner_index){
                product *= num
            }
        })
        return product
    })
}

console.log(productExceptSelf([-1,0,1,2,3]));