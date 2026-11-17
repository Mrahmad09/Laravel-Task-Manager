import { Link, router, useForm, usePage } from "@inertiajs/react";
export default function Todos({ todos }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        task: "",
    });
    const { auth } = usePage().props;
    const user = auth?.user;

    function submit(e) {
        e.preventDefault();
        post("/createTodo", { onSuccess: () => reset() });
    }
    function clearAll() {
        if (confirm("Delete all?")) router.delete("/clearTodos");
    }
    function deleteId(id) {
        router.post(`/delete/${id}`);
    }
    function logOut() {
        router.post("/logout");
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-start justify-center pt-16 px-4">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6">
                {user ? (
                    <>
                        <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                            My Todos
                        </h1>

                        <form onSubmit={submit} className="flex gap-2 mb-2">
                            <input
                                value={data.task}
                                onChange={(e) =>
                                    setData("task", e.target.value)
                                }
                                placeholder="What needs doing?"
                                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                            />
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                            >
                                Add
                            </button>
                        </form>
                        <button
                            type="button"
                            onClick={logOut}
                            className="mb-3 flex w-full items-center justify-center rounded-lg bg-slate-700 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                        >
                            Log out
                        </button>
                        {errors.task && (
                            <div className="text-red-500 text-sm mb-2">
                                {errors.task}
                            </div>
                        )}

                        <ul className="mt-4 divide-y divide-slate-200">
                            {todos.length === 0 && (
                                <li className="text-center text-slate-400 py-6">
                                    Nothing here yet ✨
                                </li>
                            )}
                            {todos.map((todo) => (
                                <li
                                    key={todo.id}
                                    className="flex items-center justify-between py-3 group"
                                >
                                    <span className="text-slate-700">
                                        {todo.task}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => deleteId(todo.id)}
                                        aria-label={`Delete ${todo.task}`}
                                        className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition text-lg leading-none"
                                    >
                                        ✕
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {todos.length > 0 && (
                            <button
                                onClick={clearAll}
                                className="mt-6 w-full py-2 rounded-lg border border-red-300 text-red-600 hover:bg-red-50 transition text-sm font-medium"
                            >
                                Clear all
                            </button>
                        )}
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                            Welcome
                        </h1>
                        <p className="text-slate-500 text-center mb-6 text-sm">
                            Log in or sign up to manage your todos.
                        </p>
                        <Link
                            href="/login"
                            className="mb-3 flex items-center justify-center w-full py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm font-medium"
                        >
                            Log In
                        </Link>
                        <Link
                            href="/register"
                            className="flex items-center justify-center w-full py-2 rounded-lg border border-indigo-300 text-indigo-600 hover:bg-indigo-50 transition text-sm font-medium"
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
