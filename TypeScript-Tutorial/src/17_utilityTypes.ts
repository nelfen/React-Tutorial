interface UserProfile {
  id: number;
  username: string;
  email: string;
  age: number;
}


//Partial<T>
function updateUser(original: UserProfile, fieldsToUpdate: Partial<UserProfile>) {
  return { ...original, ...fieldsToUpdate };
}

const me: UserProfile = { id: 1, username: "철수", email: "cs@test.com", age: 20 };

const updatedMe = updateUser(me, { email: "new_cs@test.com" });
console.log(updatedMe);


//Pick<T, Keys>
type UserPreview = Pick<UserProfile, "username" | "email">;

const miniProfile: UserPreview = {
  username: "영희",
  email: "yh@test.com",
  // age: 30
};


//Omit<T, Keys>
type UserInput = Omit<UserProfile, "id">;

const newUser: UserInput = {
  username: "민수",
  email: "ms@test.com",
  age: 25,
  // id: 3
};


// 4. Record<Keys, Type>
type Subject = "Math" | "English" | "Science";

const myScores: Record<Subject, number> = {
  Math: 100,
  English: 85,
  Science: 90,
  // History: 50
};