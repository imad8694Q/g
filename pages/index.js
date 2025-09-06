import { useUser, UserButton } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold">مرحباً، {user?.firstName || "مستخدم"}</h1>
      <p className="mt-2 text-gray-700">لقد قمت بتسجيل الدخول بنجاح 🎉</p>
      <div className="mt-6">
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </div>
  );
}/sign-in" />
          </div>
        </>
      ) : (
        <p className="text-lg">جارٍ التحميل...</p>
      )}
    </main>
  );
}up</Link> to continue.
        </p>
      )}
    </main>
  );
}<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold">مرحباً، {user.firstName || "مستخدم"}</h1>
      <p className="mt-2 text-gray-700">لقد قمت بتسجيل الدخول بنجاح 🎉</p>
      <div className="mt-6">
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </div>
  );
}