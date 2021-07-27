const add = (a: number) => (b: number) => a + b;

const promise = new Promise<number>((resolve, reject) => {
  return resolve(3);
});

promise.then((a) => console.log(a)).catch((err) => console.log(err));
