import { useForm, Link } from "@inertiajs/react";
export default function LoginForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });
    function submit(e) {
        e.preventDefault();
        post("/login");
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-slate-900">
                    Welcome back
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                    Sign in to your account
                </p>

                <form className="mt-6 space-y-4" onSubmit={submit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700"
                        >
                            Email
                        </label>
                        <input
                            value={data.email}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder="you@example.com"
                            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-slate-700"
                            />
                            Password
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="••••••••"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>
                    <div className="flex items-center gap-2"></div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}
