import "../css/app.css";
import { createInertiaApp, router, useForm } from "@inertiajs/react";
import ReactDOM from "react-dom/client";

const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });

createInertiaApp({
    resolve: (name) => pages[`./Pages/${name}.jsx`],
    setup({ el, App, props }) {
        ReactDOM.createRoot(el).render(<App {...props} />);
    },
});
