import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}  </div>
  );
}66-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-white mb-6">
          إنشاء حساب جديد
        </h1>
        <p className="text-gray-300 mb-6">
          قم بإنشاء حسابك للوصول إلى لوحة التحكم
        </p>
        <div className="flex justify-center">
          <SignUp />
        </div>
      </div>
    </div>
  );
}