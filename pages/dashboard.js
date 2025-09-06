import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">مرحباً 👋</h1>
      <p className="text-lg mb-6">
        {user ? `أهلاً ${user.firstName || "مستخدم"}` : "جارٍ التحميل..."}
      </p>
      <p className="mt-2">This is your dashboard.</p>
    </div>
  );
}  <p className="mt-2">This is your dashboard.</p>
    </div>
  );
}d mb-4">مرحباً 👋</h1>
        <p className="text-lg mb-6">
          {user ? `أهلاً ${user.firstName || "مستخدم"}` : "جارٍ التحميل..."}
        </p>

        <UserButton afterSignOutUrl="/login" />
      </div>
    </div>
  );
}