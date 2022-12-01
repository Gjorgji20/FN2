const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']]

console.log(theList);

theList.shift();
theList.unshift("FIRST");
console.log(theList);
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.push("MIDDLE");
theList.push("hello World","last");
theList[theList.length-1].toUpperCase;
console.log(theList);