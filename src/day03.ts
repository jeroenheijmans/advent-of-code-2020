(() => {

const input = `
`;

let data = input
  .trim()
  .split(/\r?\n/)
  .filter(x => !!x)
  .map(x => x)
  ;

let result = 0;

console.log('Part 1:', result);

})();