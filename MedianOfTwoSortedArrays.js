var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const totalLength = m + n;
    if (!(m >= 0 && m <= 1000) || !(n >= 0 && n <= 1000) || (totalLength) < 1) {
        return -1;
    }
    let merged = [];  //merged array
    if (m === 0) {
        merged = nums2;
    } else if (n === 0) {
        merged = nums1;
    } else {
        let i = 0;
        let j = 0;
        let fakeElement = 0;

        //make merged array by comparing arrays
        for (let ctr = 0; ctr < (totalLength); ctr++) {
            if (nums1[i] < nums2[j]) {
                merged[ctr] = nums1[i];
                if (i === m - 1) {
                    fakeElement = nums2[n - 1] + 1;
                    nums1.push(fakeElement); //ensures that this array will not be picked again, but changes original nums1 argrument which is deceiving
                }
                i++;
            } else {
                merged[ctr] = nums2[j];
                if (j === n - 1) {
                    fakeElement = nums1[m - 1] + 1;
                    nums2.push(fakeElement);
                }
                j++;
            }
        }
    }

    for (let element in merged) {
        if (element < -(10 ** 6) || element > 10 ** 6) return -1; //checking value constraints
    }

    //determine median
    if (totalLength % 2 === 0) {  //if even, return average of two innermost elements
        medianUpper = merged[totalLength / 2];
        medianLower = merged[totalLength / 2 - 1];
        return (medianLower + medianUpper) / 2;
    } else {
        medianIndex = Math.floor(totalLength / 2);  //if odd, return value in innermost element
        return merged[medianIndex];
    }
};


arr1 = [2, 3, 7, 8, 13, 14];
arr2 = [1, 4, 6, 10];
console.log(findMedianSortedArrays(arr1, arr2));
