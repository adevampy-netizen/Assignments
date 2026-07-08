const rows: number = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // Print stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}