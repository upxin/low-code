const ipt = `
3 6 9 11 12 14 15 16 17 19 21 22 23 26 29 32 34 # 5 7
3 6 8 9 10 11 12 14 16 17 18 19 21 24 26 32 34 35 # 5 9
4 6 11 12 21 22 24 25 26 27 28 29 30 31 32 33 34 35 # 3 5
2 3 8 9 11 15 16 17 20 24 25 26 32 33 34 # 9 11 12
6 9 10 12 16 19 21 22 25 26 28 30 32 35 # 3 5 7
3 5 6 8 11 12 17 19 20 21 24 25 27 31 34 # 6 12
3 4 6 9 10 11 13 16 19 26 27 29 31 33 34 # 4 5 9
2 3 6 8 9 10 11 14 15 16 22 25 28 33 # 2 4 8 9
3 4 6 9 11 13 16 19 26 27 29 31 33 34 # 4 5 9
3 5 6 8 11 12 17 19 23 24 25 27 31 34 # 6 12
2 3 6 8 9 12 14 16 17 19 24 26 33 34 # 3 7 9
3 4 7 11 13 20 26 27 29 30 32 34 # 2 5 8
5 6 11 13 15 16 19 23 30 32 33 35 # 3 8 9
3 8 12 13 15 18 19 23 26 27 32 34 # 2 4 11
3 4 7 10 12 17 19 20 23 25 27 30 # 4 9 10
2 3 8 9 13 18 22 25 28 29 33 35 # 1 7 10
3 7 9 10 14 19 21 25 27 32 33 34 # 1 3 5
3 4 7 12 13 18 20 27 28 31 32 # 3 7 8
2 6 7 8 15 18 21 24 30 35 # 8 10 11 12
7 9 11 12 14 17 25 26 32 35 # 5 8 12
2 6 12 15 16 17 22 23 25 28 # 1 3 11
4 5 8 13 14 15 18 20 22 25 32 # 2 3 5 8
3 15 18 20 21 24 27 28 29 33 # 1 2 7 9
3 6 9 11 15 18 20 22 25 28 29 33 # 7 2
3 6 9 11 15 18 20 22 25 28 29 33 # 7 8
3 4 5 6 9 10 18 26 32 35 # 2 7 8 12
2 6 9 14 16 17 23 32 # 2 7
2 5 6 11 16 17 25 35 # 1 10 11
4 17 19 21 24 28 32 # 3 9 10
5 8 13 17 20 25 29 31 # 4 9
4 6 7 14 17 18 22 29 30 # 2 5 10
3 6 16 23 24 32 34 # 4 9 11
1 5 16 23 24 32 34 # 411


6 7 9 10 14 20 25 32 # 2 3 10
2 3 4 7 9 11 17 22 27 29 # 1 6 7 9
2 6 12 15 16 17 22 23 25 28 # 1 3 11
3 4 7 12 13 18 20 27 28 31 32 # 3 7 8
7 9 11 12 14 17 25 26 32 35 # 5 8 12 
3 15 18 20 21 24 27 28 29 33 # 1 2 7 9

3 4 12 16 19 24 # 1 5 9
4 15 16 21 27 33 35 # 8 12
1 6 7 9 20 26 28 # 9 10
1 2 6 10 14 16 22 26 34 35 # 5 11
3 4 14 17 24 25 33 # 2 7 8 9 10 12
6 11 19 20 21 30 33 # 3 8
7 8 21 23 28 29 31 # 1 2
3 6 16 20 27 35 # 3 4 7 
9 12 14 15 18 24 25 29 # 3 5 7 11
5 20 21 22 25 26 28 # 9 10
13 18 20 23 25 28 # 2 5 9
7 12 26 28 33 # 3 5 8 9
2 4 6 15 20 25 31 # 4 12
2 5 6 11 16 17 25 35 # 1 10 11
`;

const g1 = [];
const g2 = [];

module.exports = {
  ipt,
};
