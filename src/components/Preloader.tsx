import { useEffect, useState } from "react";

const Preloader = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setVisible(false), 500); // delay suave
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">

                {/* Loader */}
                <div className="w-12 h-12 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>

                {/* Texto */}
                <p className="text-sm text-black/60 tracking-wide">
                    Carregando...
                </p>

            </div>
        </div>
    );
};

export default Preloader;