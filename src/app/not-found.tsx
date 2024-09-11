export default function NotFound() {
    return (
        <main className="h-screen">
            <div className="flex flex-col space-y-16 items-center justify-center h-full w-full">
                <h2 className="text-8xl text-stroke-white font-lazy-dog text-blue-500">
                    404 - Not Found
                </h2>
                <p className={"text-4xl"}>Could not find the page you were looking for.</p>
            </div>
        </main>
    );
}