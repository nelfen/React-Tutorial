class person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  say() {
    console.log(this.name + ": " + "안녕하세요!");
  }
}

// const hong = new person('홍길동', 30, '남');
// console.log(hong);
// hong.say();

// const um = new person('엄준식', 40, '남');
// console.log(um);
// um.say();

