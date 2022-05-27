let random = Math.floor(Math.random() * 6);
if (random === 1) {
  console.log("턴 종료");
} else if (random === 2 || random === 3) {
  console.log("롤");
} else {
  console.log("스탑");
}
