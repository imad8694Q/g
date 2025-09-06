import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}  </div>
  );
}38-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-white mb-6">
          تسجيل الدخول إلى حسابك
        </h1>
        <p className="text-gray-300 mb-6">
          أدخل بياناتك للوصول إلى لوحة التحكم
        </p>
        <div className="flex justify-center">
          <SignIn />
        </div>
      </div>
    </div>
  );
}