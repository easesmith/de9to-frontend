import { useEffect } from "react";

export function useScrollToTop(dependencies = []) {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            requestAnimationFrame(() => {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, dependencies);

}
