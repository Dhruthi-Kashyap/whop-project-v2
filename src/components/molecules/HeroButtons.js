import Button from "../atoms/Button";

export default function HeroButtons() {
  return (
    <div className="flex gap-6 mt-8">
      <Button>Start Selling →</Button>

      <Button
        variant="secondary"
        className="px-4 py-2 text-[12.49px] font-semibold"
      >
        ▶ Watch video
      </Button>
    </div>
  );
}