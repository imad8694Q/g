import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">MyApp</h1>

        {/* Links */}
        <div className="space-x-6">
          <Link href="/" className="text-white hover:text-yellow-300 font-medium">
            الصفحة الرئيسية
          </Link>
          <Link href="/sign-in" className="text-white hover:text-yellow-300 font-medium">
            تسجيل الدخول
          </Link>
          <Link href="/sign-up" className="text-white hover:text-yellow-300 font-medium">
            إنشاء حساب
          </Link>
        </div>
      </div>
    </nav>
  );
}