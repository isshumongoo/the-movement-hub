
interface WelcomeHeaderProps {
  name: string;
  chapter: string;
}

const WelcomeHeader = ({ name, chapter }: WelcomeHeaderProps) => (
  <header className="bg-white/90 shadow-lg rounded-xl px-8 py-6 flex flex-col md:flex-row items-center justify-between transition hover:scale-[1.01]">
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-1">
        Welcome to The Movement Street Portal
      </h1>
      <p className="text-lg text-muted-foreground">
        Hi <span className="font-semibold">{name}</span> &mdash; {chapter} Chapter
      </p>
    </div>
    <div className="mt-4 md:mt-0">
      <span className="inline-block bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white rounded-full px-6 py-2 text-base font-semibold shadow hover:scale-105 transition">
        Check out what's new this month!
      </span>
    </div>
  </header>
);

export default WelcomeHeader;
