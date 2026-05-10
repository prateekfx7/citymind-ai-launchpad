import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body">
      <div className="text-xl font-semibold tracking-tight text-foreground">
        ✦ Nexora
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
      </div>
      <Button className="rounded-full px-5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
        Get Started
      </Button>
    </nav>
  );
}
