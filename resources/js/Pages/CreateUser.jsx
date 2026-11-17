import { useForm, Link } from "@inertiajs/react";
export default function RegisterForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/register", {
            onSuccess: () => reset("password", "password_confirmation"),
        });
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-slate-900">
                    Welcome back
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                    Sign Up to your account
                </p>

                <form className="mt-6 space-y-4" onSubmit={submit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-slate-700"
                        >
                            Name
                        </label>
                        <input
                            value={data.name}
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            onChange={(e) => setData("name", e.target.value)}
                            placeholder="Your name"
                            aria-invalid={Boolean(errors.name)}
                            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>
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
                            aria-invalid={Boolean(errors.email)}
                            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-slate-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            placeholder="••••••••"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            aria-invalid={Boolean(errors.password)}
                            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="password_confirmation"
                            className="block text-sm font-medium text-slate-700"
                        >
                            Confirm password
                        </label>
                        <input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            autoComplete="new-password"
                            placeholder="••••••••"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {processing ? "Creating account..." : "Sign up"}
                    </button>
                    <Link
                        href="/todos"

                        className="mt-4 flex items-center justify-center w-full py-2 rounded-lg border border-indigo-300 text-indigo-600 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition text-sm font-medium"
                    >
                        {" "}
                        Todos{" "}
                    </Link>
                    <Link
                        href="/login"

                        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {" "}
                        login{" "}
                    </Link>
                </form>
            </div>
        </div>
    );
}
