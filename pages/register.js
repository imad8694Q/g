import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">إنشاء حساب</h1>
        <SignUp path="/register" routing="path" signInUrl="/login" />
      </div>
    </div>
  );
}