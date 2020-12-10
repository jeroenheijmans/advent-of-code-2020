(() => {

const input = `
73
114
100
122
10
141
89
70
134
2
116
30
123
81
104
42
142
26
15
92
56
60
3
151
11
129
167
76
18
78
32
110
8
119
164
143
87
4
9
107
130
19
52
84
55
69
71
83
165
72
156
41
40
1
61
158
27
31
155
25
93
166
59
108
98
149
124
65
77
88
46
14
64
39
140
95
113
54
66
137
101
22
82
21
131
109
45
150
94
36
20
33
49
146
157
99
7
53
161
115
127
152
128
`;

const example = `
16
10
15
5
1
11
7
19
6
12
4
`;

let data = input
  .trim()
  .split(/\r?\n/)
  .filter(x => !!x)
  .map(x => parseInt(x))
  .sort((a, b) => a - b);

let part1 = 0, part2 = 0;
let joltage = 0, ones = 0, threes = 0;

for (let i=0; i<data.length; i++) {
  const diff = data[i] - joltage;
  if (diff === 1) ones++;
  if (diff === 3) threes++;
  joltage = data[i];
}

threes++; // final device

part1 = ones * threes;

console.log('Part 1:', part1);
console.log('Part 2:', part2);

})();