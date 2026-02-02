let prom1 = new Promise((res, rej) => {
  let flag = true;
  setTimeout(() => {
    if (flag) return res("ok");
    return rej("not ok");
  }, 5000);
});

let prom2 = new Promise((res, rej) => {
  let flag = true;
  if (flag) return res("ok2");
  return rej("not ok2");
});

let resolver = async () => {
  console.log("pop");
  let res1 = await prom1;
  console.log(res1);
  console.log("hello");
};

resolver();
