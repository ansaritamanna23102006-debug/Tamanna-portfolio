import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full">
            {/* Background Image */}
            <Image
                src="/1.avif"
                alt="Portfolio background"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
                <div>
                    <h1 className="text-4xl font-bold sm:text-5xl">
                        Hi, I’m Tamanna Ansari
                    </h1>

                    <p className="mt-3 text-base sm:text-lg">
                       AI & ML student
                    </p>

                    <div className="mt-6 flex justify-center gap-4">
                        <Link
                            href="#projects"
                            className="rounded bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-200"
                        >
                            Projects
                        </Link>

                        <Link
                            href="#contact"
                            className="rounded border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}