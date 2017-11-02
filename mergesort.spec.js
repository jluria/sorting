describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1, 2, 3, 4]) ).toEqual([[1,2],[3,4]]);
  });

  it('is able to split an array with an odd number of values', function(){
    expect( split([1,2,3,4,5]) ).toEqual([[1,2],[3,4,5]]);
  });

  it('is able to split an array with an odd number of values', function(){
    expect( split([1,2,3,4,5,6,7]) ).toEqual([[1,2,3],[4,5,6,7]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge( [0,4,7],[3,5,8]) ).toEqual([0,3,4,5,7,8]);
  });
});
