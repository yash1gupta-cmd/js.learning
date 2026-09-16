const myobject = {
     js: "java script",
     cpp: "C++",
     rb: "ruby",
     swift: "swift for apple",
}
for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
    
}