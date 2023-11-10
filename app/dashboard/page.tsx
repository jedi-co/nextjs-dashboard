import Image from "next/image";

export default function Page() {
    return (
        <main>
            <p className="uppercase underline">Dashboard Page</p>
            <Image
                src="/customers/amy-burns.png"
                width={100}
                height={100}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop and mobile versions"
            />
        </main>
    );
}