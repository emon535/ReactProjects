const addOne  = num => num+1;
const ensureNum = eachvalue =>
  typeof eachvalue === 'string' ? parseInt(eachvalue):eachvalue



const Add =array =>
  array.map( ensureNum)
       .map(addOne)



Add([1,2,3,"4",5]);