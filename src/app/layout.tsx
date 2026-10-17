import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "郑皓 · Portfolio",
  description: "安静的创作者，让想法在代码、影像与硬件之间落地。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
      data-immersive-translate-page-theme="dark"
      suppressHydrationWarning
    >
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
