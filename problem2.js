function cetakTablePerkalian(n) {
  const table = [];
  let row = [];
  for (let i = 1; i <= n; i++) {
    row.push(i);
  }
  table.push(row);
  for (let i = 2; i <= n; i++) {
    row = [];
    for (let j = 1; j <= n; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  for (let i = 0; i < table.length; i++) {
    console.log(table[i].join("\t"));
  }
}
cetakTablePerkalian(10);