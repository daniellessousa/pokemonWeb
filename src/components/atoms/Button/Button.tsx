export function Button({ children, className }: { children: React.ReactNode | string, className?: string }) {
    return (
        <button className={className}>
            {children}
        </button>
    );
}