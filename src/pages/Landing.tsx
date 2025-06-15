
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-violet-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            The Movement Street
          </div>
          <div className="space-x-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Join Now</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Innovate. Activate. Elevate.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join The Movement Street - a community of changemakers dedicated to service, 
            leadership development, and social impact. Track your volunteer hours, 
            earn badges, and grow through our Leadership Academy.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link to="/signup">
              <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full md:w-auto">
                Member Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6 bg-white/70 rounded-xl border shadow-sm">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Service Tracking</h3>
            <p className="text-muted-foreground">
              Log your volunteer hours and track your impact across multiple programs and events.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/70 rounded-xl border shadow-sm">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Leadership Development</h3>
            <p className="text-muted-foreground">
              Access our ASSEMBLY Series with modules on Service, Strategy, Social Impact, and Storytelling.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/70 rounded-xl border shadow-sm">
            <div className="text-4xl mb-4">🏅</div>
            <h3 className="text-xl font-semibold mb-2">Recognition & Growth</h3>
            <p className="text-muted-foreground">
              Earn badges, climb membership tiers, and get recognized for your contributions.
            </p>
          </div>
        </div>

        {/* Chapters Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Active Chapters</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Detroit', 'DC', 'Flint', 'Atlanta', 'Chicago'].map((chapter) => (
              <span
                key={chapter}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white rounded-full text-sm font-medium"
              >
                {chapter}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t mt-20">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 The Movement Street. All rights reserved.</p>
          <p className="mt-2 italic">"Innovate. Activate. Elevate."</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
