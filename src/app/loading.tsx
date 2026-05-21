export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50">
      <div className="text-center animate-pulse">
        <div className="w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-white">
          Loading...
        </p>
      </div>
    </div>
  );
}