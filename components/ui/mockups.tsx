import { cn } from "@/lib/utils";

export interface SafariProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  url?: string;
}

export function Safari({
  className,
  src,
  url = "portfolio.com",
  children,
  ...props
}: SafariProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border bg-background shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex h-10 items-center gap-2 border-b bg-muted/40 px-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="flex flex-1 justify-center px-4">
          <div className="flex h-6 w-full max-w-xs items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
            {url}
          </div>
        </div>
        <div className="w-16" /> {/* Spacer for balance */}
      </div>
      <div className="relative w-full bg-background">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt="Safari Content" className="w-full" />
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export function Iphone15Pro({
  className,
  src,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { src?: string }) {
  return (
    <div
      className={cn(
        "relative h-[600px] w-[300px] overflow-hidden rounded-[40px] border-8 border-gray-900 bg-gray-900 shadow-2xl ring-1 ring-white/10",
        className
      )}
      {...props}
    >
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-3 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black">
        <div className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gray-800" />
      </div>

      {/* Screen Content */}
      <div className="h-full w-full overflow-hidden rounded-[32px] bg-background">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt="iPhone Content"
            className="h-full w-full object-cover"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
