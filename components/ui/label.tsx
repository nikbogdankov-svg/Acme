export function Label({ text = "Label" }: { text?: string } = {}) {
  return (
    <p className="flex items-center gap-2 text-style-sm leading-none font-medium text-foreground">{text}</p>
  );
}

export default Label;
