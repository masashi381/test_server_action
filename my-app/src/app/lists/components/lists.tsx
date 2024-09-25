"use client";

import Link from "next/link";

type PropsType = {
  users: { id: string; name: string }[];
  deleteUserAction: (formData: FormData) => void;
};
const Lists = (props: PropsType) => {
  const users = props.users;
  const deleteUser = props.deleteUserAction;
  console.log("users", users);

  return (
    <ul className="flex flex-col gap-y-2">
      {users.map((user) => (
        <li key={user.id} className="flex items-center gap-x-4">
          <div>{user.name}</div>
          <div className="flex items-center">
            <Link href={`../posts/${user.id}`}>Go To</Link> | {""}
            <Link href={`../posts/${user.id}/edit`}>Edit</Link> | {""}
            {/* <form action={deleteUser.bind(null, user.id)}>
              <button type="submit">Delete</button>
            </form> */}
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button type="submit">Delete</button>
            </form>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Lists;
