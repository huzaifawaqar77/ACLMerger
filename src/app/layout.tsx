import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MSWORD ACL Merger - Merge Microsoft Word AutoCorrect List Files",
  description:
    "Free Windows application for merging Microsoft Word AutoCorrect List (.acl) files. Combine entries from multiple users, detect conflicts, and deploy your merged list directly to your Office installation.",
  keywords: [
    "ACL",
    "AutoCorrect List",
    "Microsoft Word",
    "acl merger",
    "Word AutoCorrect",
    "MSO1033",
    "Office",
    "Windows",
  ],
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
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
