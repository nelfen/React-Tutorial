//Intersection Type
type Admin = {
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "김철수",
  privileges: ["서버 관리", "채용"],
  startDate: new Date(),
};

console.log(`${e1.name}님은 오늘부터 근무하며, 권한은 ${e1.privileges}입니다.`);


//Discriminated Union
interface SuccessState {
  state: "success";
  response: { body: string };
}

interface FailState {
  state: "fail";
  errorCode: number;
}

type NetworkState = SuccessState | FailState;

function printStatus(status: NetworkState) {
  switch (status.state) {
    case "success":
      console.log(`요청 성공: ${status.response.body}`);
      break;

    case "fail":
      console.log(`에러 발생! 코드: ${status.errorCode}`);
      break;
  }
}

printStatus({ state: "success", response: { body: "데이터 수신 완료" } });
printStatus({ state: "fail", errorCode: 404 });