var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let totalLength = m + n;
    if (!(m >= 0 && m <= 1000) || !(n >= 0 && n <= 1000) || (totalLength) < 1) {
        return -1;
    }
    i = 0;
    j = 0;
    const merged = [];
    arr1Finished = false;
    arr2Finished = false;

    // begin making merged array by comparing arrays until one is finished
    for (let ctr = 0; ctr < (totalLength); ctr++) {
        if (nums1[i] < nums2[j]) {
            merged[ctr] = nums1[i];
            if (i === m - 1) {
                arr1Finished = true;
                break;
            }
            i++;
        } else {
            merged[ctr] = nums2[j];
            if (j === n - 1) {
                arr2Finished = true;
                break;
            }
            j++;
        }
    }

    //add remaining elements from array that is not finished to end of merged array
    let remainder = [];
    if (arr1Finished === true) {
        remainder = nums2.slice(j);
    } else {
        remainder = nums1.slice(i);
    }
    let mergedFinal = merged.concat(remainder);

    // console.log(`merged = ${merged}`);
    // console.log(arr3);

    //determine median
    if (totalLength % 2 === 0) {  //if even, return average of two innermost elements
        medianUpper = mergedFinal[totalLength / 2];
        medianLower = mergedFinal[medianUpper - 1];
        return (medianLower + medianUpper) / 2;
    } else {
        medianIndex = Math.floor(totalLength / 2);  //if odd, return value in innermost element
        return mergedFinal[medianIndex];
    }
};

arr1 = [2, 3, 7, 8, 13, 15];
arr2 = [1, 4, 6, 10];
console.log(findMedianSortedArrays(arr1, arr2));
