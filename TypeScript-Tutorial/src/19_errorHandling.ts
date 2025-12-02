function checkPositiveNumber(num: number): number {
  if (num < 0) {
    throw new Error("음수는 입력할 수 없습니다!");
  }
  return num + 10;
}

function safeCalculate() {
  try {
    const result = checkPositiveNumber(-5); 
    console.log(`결과: ${result}`);
  } catch (err) {
    if (err instanceof Error) {
      console.log(`에러 발생: ${err.message}`);
    } else {
      console.log("알 수 없는 에러가 발생했습니다.");
    }
  } finally {
    console.log("계산 종료!");
  }
}

safeCalculate();