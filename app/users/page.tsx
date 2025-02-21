// app/users/page.tsx
import { getUsers } from "@/app/actions/supabaseActions";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Users</h1>
      {users ? (
        <ul className="mt-4">
          {users.map((user: { id: string; firstName: string; email: string }) => (
            <li key={user.id} className="border-b py-2">
              {user.firstName} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
