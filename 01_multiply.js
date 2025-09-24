//npm init -y를 통해 package.json파일 생성 후 "type": "module", 추가
const multiply = (x, y) => console.log(`${x} x ${y} = ${x * y}`);

// module.exports = multiply;
export default multiply;
