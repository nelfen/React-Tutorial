class Person {
    constructor(id, name, title) {
        this.id = id;
        this.name = name;
        this.title = title;
        console.log(`Person 객체 생성: ${name}`);
    }
    getName() {
        return this.name;
    }
    getPrivateId() {
        return this.id;
    }
}
class Manager extends Person {
    constructor(id, name, teamSize) {
        super(id, name, "Manager");
        this.teamSize = teamSize;
    }
    describeRole() {
        console.log(`${this.name}의 직책은 ${this.title}이며, 팀원은 ${this.teamSize}명입니다.`);
    }
}
const employee1 = new Person(1, "홍길동", "Developer");
const manager1 = new Manager(2, "김철수", 5);
console.log(`직원 이름: ${employee1.name}`);
export {};
