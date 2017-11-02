describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array containing a single item', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles an array containing multiple items', function(){
    expect( bubbleSort([8, 12, 3, 42, 1, 7]) ).toequal( [1, 3, 7, 8, 12, 42] );
  });
});
