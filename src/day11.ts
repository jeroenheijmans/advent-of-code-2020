(() => {

const input = `
LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLLL..LLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLL.LL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
...L.L......L...L..L...L..LL.....L.....L..LLLL..L.LL......LL....L..L.L..L....L.LL....LL..L..L
LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLL.LLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLL
LLLLLLLLLL.LLL..LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLL..LLLLLLLLLLLLLLLLL.LLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLL
LLLL.LLLLL.LLLL.LLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
.....L.LLLL....LL..L...LLL.L.LL..LL.L........L....LL...L...L...L.LL....LL...L..L.....LL.L....
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LL.LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LL.LLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL..LLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLL..LLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLL.LLLLLLLL.LLLLLLLLLL.LLLLL.LL.LLLLLLLLLL
...L......L....L....L......L.L.....L..L.L.L..L.L...LLL.....LLLL.L.......LL.LLL.L.LL....L.....
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLL.L.LLLL.LLL
LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LL.L.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLL
...LL..........L..LLLLL...L.L..........L........L.LL..L..L.LLL.L..L.L.....LL...LL....L..L.L..
LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLL
LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL..LLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLL.LLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLL.LLLL.LLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLL.LLLLLLLL.LLLL.LLLLL..LLLLLLL.LLLLLLLLLL
LLLLLLLLL..L.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLL
..LLLL.LL....LLL..L...L..L..L.......L..L...L.L...L..LL.L.L.L.L...L...L.L.L.L.L......LL...L..L
LLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLLLLLLL.LLLL.LLLLL.LLLLL.LLLLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLL.LLL.LLLLLLLL.L.LLLLLL.LLLL.LLLL.LLLLLLLL.LLLL.LLLLLL.LLLLLL..LLLLLL.LLL
..L...L...L...L..L....L...LL.L.L.L..LL...........LLL.L......L..L.....LL..L..LLL........L....L
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLL.LL.LLLL.LLLLLLL.L.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.L.LLLL.LLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLL.LL.L.LLLLL
..L.L.LL....L....L..L....L.L...L..L..L.L.....L..L...L.LL.....L...............L..............L
LLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LL.L.LLLL.LLL.LLLL.LLLLL.LL.LLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LL.L.LLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LL.LLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
L.L.....L.L.L.LL.L......LLL.....L.L.L........L....LL.......L....L.....L....LL..L...LLL......L
LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLL.L.LLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLL..LLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLL.LLLL.LLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
...L...L.....L....L.L..........L..L.L..L..L..LL.L..L.......L.......L....L....L...LLL..L..L..L
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL
LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLL
..LLL....L.LL....L..............LLL......LL.LLL.....LL..L.L..L........L......L...L.LL..LL..L.
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLL..LLLLLLLLLLLLLL.LLLLLLLLLL
L.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLL...LLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLL.LLLL.LLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
L...L.LL......L...LLLLLL.L.L.L...L.L..L..L.LL....L......LL..L...LLL....L...LL......L.........
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLL.LLL..LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLL.LLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLL
`;

const example = `
L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL
`;

let source = input
  .trim()
  .split(/\r?\n/)
  .filter(x => !!x)
  .map(x => x.split(""));

let part1 = 0, part2 = 0;

let data = source.map(rows => rows.slice(0));

while (true) {
  let newdata = data.map(rows => rows.slice(0));

  for (let y=0; y<data.length; y++) {
    for (let x=0; x<data[0].length; x++) {

      if (data[y][x] === ".") continue; // nobody sits on the floor!

      let occupieds = 0, empties = 0;

      for (let ty=y-1; ty<=y+1; ty++) {
        for (let tx=x-1; tx<=x+1; tx++) {
          if (tx < 0 || ty < 0) continue;
          if (tx >= data[0].length) continue;
          if (ty >= data.length) continue;
          
          if (data[ty][tx] === "L") empties++;
          if (data[ty][tx] === "#") occupieds++;
        }
      }

      if (data[y][x] === "L" && occupieds === 0) newdata[y][x] = "#";
      if (data[y][x] === "#" && occupieds > 4) newdata[y][x] = "L";
    }
  }
  
  let same = true;
  for (let y=0; y<data.length; y++) {
    for (let x=0; x<data[0].length; x++) {
      if (data[y][x] !== newdata[y][x]) {
        same = false;
        break;
      }
    }
    if (!same) break;
  }

  data = newdata;
  if (same) break;
}

for (let y=0; y<data.length; y++) {
  for (let x=0; x<data[0].length; x++) {
    if (data[y][x] === "#") part1++;
  }
}

function getVisibleSeat(x: number, y: number, dirx: number, diry: number, data: Array<Array<string>>): string {
  if (x < 0) return "";
  if (y < 0) return "";
  if (y >= data.length) return "";
  if (x >= data[0].length) return "";

  if (data[y][x] === "L") return "L";
  if (data[y][x] === "#") return "#";

  return getVisibleSeat(x + dirx, y + diry, dirx, diry, data);
}

// Reset for part2:
data = source.map(rows => rows.slice(0));

while (true) {
  let newdata = data.map(rows => rows.slice(0));

  for (let y=0; y<data.length; y++) {
    for (let x=0; x<data[0].length; x++) {

      if (data[y][x] === ".") continue; // nobody sits on the floor!

      let occupieds = 0, empties = 0;

      
      for (let ty=y-1; ty<=y+1; ty++) {
        for (let tx=x-1; tx<=x+1; tx++) {
          const visible = getVisibleSeat(x+tx, y+ty, tx, ty, data);
          if (visible === "L") empties++;
          if (visible === "#") occupieds++;
        }
      }

      if (data[y][x] === "L" && occupieds === 0) newdata[y][x] = "#";
      if (data[y][x] === "#" && occupieds > 5) newdata[y][x] = "L";
    }
  }
  
  let same = true;
  for (let y=0; y<data.length; y++) {
    for (let x=0; x<data[0].length; x++) {
      if (data[y][x] !== newdata[y][x]) {
        same = false;
        break;
      }
    }
    if (!same) break;
  }

  data = newdata;
  if (same) break;
}

for (let y=0; y<data.length; y++) {
  for (let x=0; x<data[0].length; x++) {
    if (data[y][x] === "#") part2++;
  }
}

// 5566 too high pt 2

console.log('Part 1:', part1);
console.log('Part 2:', part2);

})();