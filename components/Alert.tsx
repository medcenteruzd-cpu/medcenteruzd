interface AlertProps {
    type: "success" | "error" | null;
    message: string;
}

export default function Alert({ type }: AlertProps) {
    if (!type) return null;

    const bgColor = type === "success" ? "bg-[#133b88]" : "bg-red-600";

    return (
        <div className={`fixed bottom-6 left-6 z-[9999999] animate-in fade-in slide-in-from-right-5 duration-300 rounded-[20px]`}>
            <div className={`${bgColor} text-white p-2 rounded-lg shadow-2xl max-w-[300px] flex items-center gap-3 border border-white/10 z-50`}>
                <span className="text-xl">
                    {type === "success" ? "✅" : "⚠️"}
                </span>
                <div className="flex flex-col">
                    <span className="font-bold text-sm uppercase tracking-wider mb-1">
                        {type === "success" ? "Успішно" : "Помилка"}
                    </span>
                </div>
            </div>
        </div>
    );
}