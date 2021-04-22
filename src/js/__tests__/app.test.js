import sortHeroes from '../app';

test('checkSort', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const received = sortHeroes(input);
  expect(received).toEqual(expected);
});

// test("checkSort", () => {
//     const input = [
//         { name: 'мечник', health: 10 },
//         { name: 'маг', health: 100 },
//         { name: 'лучник', health: 80 }
//     ];

//     const expected = [
//         { name: 'маг', health: 100 },
//         { name: 'лучник', health: 80 },
//         { name: 'мечник', health: 10 }
//     ];

//     const received = sortHeroes(input);
//     expect(received).toBe(expected);
// });
