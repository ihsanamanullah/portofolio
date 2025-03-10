import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      {/* Audio Player - background music */}
      <audio
        src="/music2.mp3" // Add the path to your audio file here (without 'public' prefix)
        autoPlay
        loop
        muted={false} // Make sure the audio is not muted
        className="hidden" // Hides the default audio controls, you can make it visible if needed
      >
        Your browser does not support the audio element.
      </audio>

      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Trust Me I&apos;m A
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Fullstack Web Developer !
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Hello, I&apos;m Ihsan Amanullah ! <br />
            I&apos;m a Fullstack Web Developer with expertise in building dynamic and
            scalable web applications. As the founder of my own company, I
            specialize in creating seamless user experiences and robust back-end
            systems. With a strong foundation in both front-end and back-end
            technologies, I thrive on transforming ideas into functional,
            innovative solutions. Whether it&apos;s crafting intuitive interfaces or
            optimizing server-side performance, I am committed to delivering
            high-quality results that meet client needs and drive business
            growth. Let&apos;s build something amazing together!
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-3">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
            {/* Add "Download CV" button here */}
            <Link
              href="/cv"
              className="rounded-[20px] group relative bg-transparent border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Download CV
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Hire Me
        </Link>
        {/* Add "Download CV" button here for mobile */}
        <Link
          href="/cv"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Download CV
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-full">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-[10]"
      />
    </main>
  );
}
