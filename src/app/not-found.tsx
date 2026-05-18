import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pattern-grid bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto">
        <h1 className="text-[120px] sm:text-[150px] font-heading font-extrabold text-foreground leading-none tracking-tighter mb-4">
          404
        </h1>
        
        <div className="h-px w-24 bg-border mx-auto mb-8" />
        
        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground mb-4">
          Page Not Found
        </h2>
        
        <p className="text-muted-foreground mb-10 text-base sm:text-lg">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="btn-primary gap-2.5 mx-auto"
        >
          <Home size={16} />
          Return to Home
        </Link>
      </div>
    </div>
  );
}
