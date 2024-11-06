//linear search on array
function linear_search(A, v) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== v) {
    i = i + 1;
    }
    //return (i < len);
    return i;
}
linear_search([1,2,3,4,5,6,7,8,9], 5);

//binary search
function binary_search(A, v) {
    function search(low, high) {
        if (low > high) {
            return false;
        } else {
            const mid = math_floor((low + high) / 2);
            return (v === A[mid]) ||
            (v < A[mid]
            ? search(low, mid - 1)
            : search(mid + 1, high));
        }
    }
    return search(0, array_length(A) - 1);
}
binary_search([1,2,3,4,5,6,7,8,9], 8);

//binary search loop
function binary_search(A, v) {
    let low = 0;
    let high = array_length(A) - 1;
    while (low <= high) {
        const mid = math_floor((low + high) / 2 );
        if (v === A[mid]) {
            break;
        } else if (v < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return (low <= high);
}
binary_search([1,2,3,4,5,6,7,8,9], 8);

//sorting
//swapping
function swap(A, x, y) {
    const temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

//selection sort
function selection_sort (A) {
    const len=array_length(A);
    for (let i=0; i<len-1; i=i+1) {
        let min_pos=find_min_pos(A, i, len-1);
        swap(A, i, min_pos);
    }
}

function find_min_pos(arr, low, high) {
    let min_pos = low;
    for (let j = low + 1; j <= high; j = j + 1) {
        if (A[j] < A[min_pos]) {
            min_pos = j;
        }
    }
    return min_pos;
}

//insertion sort 
function insertion_sort(A) {
    const len = array_length(A);
    for (let i = 1; i < len; i = i + 1) {
        let j = i - 1;
        while (j >= 0 && A[j] > A[j + 1]) {
            swap(A, j, j + 1);
            j = j - 1;
        }
    }
}

// This alternative method replaces the swaps by shifting elements right
function insertion_sort2(A) {
const len = array_length(A);
    for (let i = 1; i < len; i = i + 1) {
        const x = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > x) {
            A[j + 1] = A[j]; // shift right
            j = j - 1;
            }
        A[j + 1] = x;
    }
}

function merge_sort(A) {
    merge_sort_helper(A, 0, array_length(A) - 1);
}
function merge_sort_helper(A, low, high) {
    if (low < high) {
        const mid = math_floor((low + high) / 2);
        merge_sort_helper(A, low, mid);
        merge_sort_helper(A, mid + 1, high);
        merge(A, low, mid, high);
    }
}
function merge(A, low, mid, high) {
    const B = []; // temporary array
    let left = low;
    let right = mid + 1;
    let Bidx = 0;
    while (left <= mid && right <= high) {
        if (A[left] <= A[right]) {
            B[Bidx] = A[left];
            left = left + 1;
        } else {
            B[Bidx] = A[right];
            right = right + 1;
        }
        Bidx = Bidx + 1;
    }
    while (left <= mid) {
        B[Bidx] = A[left];
        Bidx = Bidx + 1;
        left = left + 1;
    }
    while (right <= high) {
        B[Bidx] = A[right];
        Bidx = Bidx + 1;
        right = right + 1;
    }
    for (let k = 0; k < high - low + 1; k = k + 1) {
        A[low + k] = B[k];
    }
}


//memoization
function mfib(n) {
// array mem serves as memory for
// already computed results of fib
    const mem = []; //local memory
    function fib(k) {
        // test if fib(k) has been computed already
        if (mem[k] !== undefined) {
            return mem[k]; // just access memory
        } else { // compute fib and add result to mem
            const result = k <= 1 ? k : fib(k - 1) + fib(k - 2);
            mem[k] = result;
            return result;
        }
    }
    return fib(n);
}
    
const mem = [];
function mtrib(n) {
    if (mem[n] !== undefined) {
        return mem[n];
    } else {
        const result =
        n === 0 ? 0
        : n === 1 ? 1
        : n === 2 ? 1
        : mtrib(n-1) + mtrib(n-2) + mtrib(n-3);
        mem[n] = result;
        return result;
    }
}

//abstraction of memoization   
function memoize(f) {
    const mem = [];
    function mf(x) {
        if (mem[x] !== undefined) {
            return mem[x];
        } else {
            const result = f(x);
            mem[x] = result;
            return result;
        }
    }
    return mf;
}
    
//memoization of 2 dimension
function choose(n, k) {
    return k > n
        ? 0
        : k === 0 || k === n
        ? 1
        : choose(n - 1, k) + choose(n - 1, k - 1);
}
    
const mem = [];
function read(n, k) {
    return mem[n] === undefined
        ? undefined
        : mem[n][k];
}
function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}
function mchoose(n, k) {
    if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const result = k > n 
                        ? 0
                        : k === 0 || k === n 
                        ? 1
                        : mchoose(n - 1, k) +
                            mchoose(n - 1, k - 1);
                            write(n, k, result);
        return result;
    }
}