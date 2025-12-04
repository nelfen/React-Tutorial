interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
  phoneNumber?: string;
}

function formatUserGreeting(user: UserProfile): string {
  if (user.role === 'admin') {
    return `관리자 ${user.name}님, 환영합니다! (Admin)`;
  }
  return `${user.name}님, 안녕하세요!`;
}

const currentUser: UserProfile = {
  id: 101,
  name: "김코딩",
  email: "code@example.com",
  role: "user",
};

console.log(formatUserGreeting(currentUser));