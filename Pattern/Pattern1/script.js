function printTriangle(n) {
 
    for (let i = 1; i <= n; i++) {
        let space = " ";
        let star = "";
        let row = "";
        for (let j=0; j < i; j+=1){
            row += space;
        }
        for (let j = 1; j <= n-i; j++) {
            star += '*';
        }
        row = star + space;
        console.log(row);
    }
}

// Call the function with the desired number of rows
printTriangle(5);