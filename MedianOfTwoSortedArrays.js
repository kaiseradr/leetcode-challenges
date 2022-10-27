var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const totalLength = m + n;
    if (!(m >= 0 && m <= 1000) || !(n >= 0 && n <= 1000) || (totalLength) < 1) {
        return -1;
    }

    let merged = [];
    const medIndex = Math.floor(totalLength / 2);  //this is last index needed to evaluate median whether length is even or odd

    //build merged array
    if (m === 0) {
        merged = nums2;
    } else if (n === 0) {
        merged = nums1;
    } else {
        let i = 0;
        let j = 0;
        let fakeElement = 0;

        //make merged array by comparing arrays
        for (let ctr = 0; ctr <= (medIndex); ctr++) {
            if (nums1[i] < nums2[j]) {
                merged[ctr] = nums1[i];
                if (i === m - 1) {
                    merged = merged.concat(nums2.slice(j));  //since this array is done, add the rest of other array onto this one
                    break;
                }
                i++;
            } else {
                merged[ctr] = nums2[j];
                if (j === n - 1) {
                    merged = merged.concat(nums1.slice(i)); //since this array is done, add the rest of other array onto this one
                    break;
                }
                j++;
            }
        }
    }

    if (merged[0] < -(10 ** 6) || merged[merged.length - 1] > 10 ** 6) return -1; //checking value constraints at end points

    //determine median
    if (totalLength % 2 === 0) {  //if even, return average of two innermost elements
        let medianUpper = merged[medIndex];
        let medianLower = merged[medIndex - 1];
        return (medianLower + medianUpper) / 2;
    } else {
        return merged[medIndex];  //if odd, just return middle-most value
    }
};

arr1 = [2, 3, 7, 8, 13, 14];
arr2 = [1, 4, 6, 10];

console.log(findMedianSortedArrays(arr1, arr2));
