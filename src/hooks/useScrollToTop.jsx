import { useEffect } from "react";

export function useScrollToTop(dependencies = []) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, dependencies);
}
