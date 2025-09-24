class person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  say() {
    console.log(`${this.name}: 안녕하세요!`);
  }
}

// const hong = new person('홍길동', 30, '남');
// console.log(hong);
// hong.say();

// const um = new person('엄준식', 40, '남');
// console.log(um);
// um.say();

class student extends person {
  constructor(name, age, gender, grade) {
    super(name, age, gender)
    this.grade = grade;
  }
  say() {
    console.log(`${this.name}: 학생입니다!`);
  }
  study() {
    console.log(`${this.name}: 공부중...`)
  }
}

const kim = new student('김민식', 17, '남', 90);
console.log(kim);
kim.say();
kim.study();