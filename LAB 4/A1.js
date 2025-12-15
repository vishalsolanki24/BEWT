const path =require("path");
console.log(path.dirname('./osmodal/j'));
console.log(path.extname('./osmodal/name.txt'))
console.log(path.basename('./osmodal'))
 console.log(__filename)

 path1=path.join("users","arjun","document","project")
 console.log("path 1 join :",path1)

 path2=path.normalize('.//folder//subfolder////file.txt')
 console.log(path2)

 console.log(path.isAbsolute('//folder//subfolder////file.txt'))
 
console.log(path.resolve("folder","subfolder"))



