function print(arr, str) {

    console.log(arr.join(str));

}
print([
'One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
);
// One-Two-Three-Four-Five
print([
'How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);
// How about no?_I_will_not_do_it!