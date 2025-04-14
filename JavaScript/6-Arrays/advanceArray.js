//Array in js are of two types :- continuous/packed AND holey
// continuous/packed = packed have no empty holes in array e.g. [1,2,3,4,5]
// holey = holey has some empty holes in array e.g. [1,2, , , 4]

//packed and holey are of three types
//i) SMI(small integer)
//ii) DOUBLE(double, string, function)
//iii) PACKED_ELEMENTS (combination of SMI and DOUBLE)

//Optimization priorities.................(SMI > DOUBLE > PACKED_ELEMENT)
//NOTE - Once the array is degraded it cannot be optimized again even if we delete the element
