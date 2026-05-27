import "./globals.css";
export const metadata = { title: "PitchReady", description: "A personal VC fundraising tracker and checklist that guides founders through every stage of the pitch process." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
