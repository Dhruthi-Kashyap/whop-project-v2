import Logo from "@/components/atoms/Logo";
import Button from "@/components/atoms/Button";
import NavLinks from "@/components/molecules/NavLinks";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">

      <div className="flex items-center gap-2">
        <Logo />
        <span className="text-xl font-bold">Whop</span>
      </div>

      <NavLinks />

      <div className="flex gap-4">
        <Button variant="secondary">Contact sales</Button>
        <Button>Sign up</Button>
      </div>

    </nav>
  );
}