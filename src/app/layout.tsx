import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACL File Merger - Merge & Manage Access Control Lists",
  description: "Professional Windows application for merging ACL files from Microsoft products. Detect conflicts, auto-correct issues, and streamline your access control management.",
  keywords: ["ACL", "file merger", "access control", "Microsoft", "Windows", "security", "permissions"],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
