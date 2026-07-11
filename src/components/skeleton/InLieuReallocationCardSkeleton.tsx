export default function InLieuReallocationCardSkeleton() {
    return (
        <div className="bg-gray-100 flex flex-row items-start justify-start p-4 gap-2 shadow-2xl rounded-xl w-full animate-pulse">
            <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="flex-1 flex flex-col items-start justify-start gap-2 animate-pulse">
                <div className="h-3 w-1/2 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-3 w-1/3 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="h-6 w-20 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
    );
}