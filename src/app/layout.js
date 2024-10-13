import React from "react";
import "../styles/global.css";
import { geistMono, geistSans } from "@/fonts";
import { metadataPopup } from "@/metadata";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <head>
          <title>{metadataPopup.main.title}</title>
          <meta name="description" content={metadataPopup.main.description} />
          <meta name="keywords" content={metadataPopup.main.keywords} />
          <meta name="author" content={metadataPopup.main.keywords} />
          <title>{metadataPopup.badge.title}</title>
          <meta name="description" content={metadataPopup.badge.description} />
          <meta name="keywords" content={metadataPopup.badge.keywords} />
          <meta name="author" content={metadataPopup.badge.keywords} />
          <title>{metadataPopup.compact.title}</title>
          <meta
            name="description"
            content={metadataPopup.compact.description}
          />
          <meta name="keywords" content={metadataPopup.compact.keywords} />
          <meta name="author" content={metadataPopup.compact.keywords} />
          <title>{metadataPopup.fullPage.title}</title>
          <meta
            name="description"
            content={metadataPopup.fullPage.description}
          />
          <meta name="keywords" content={metadataPopup.fullPage.keywords} />
          <meta name="author" content={metadataPopup.fullPage.keywords} />
          <title>{metadataPopup.modal.title}</title>
          <meta name="description" content={metadataPopup.modal.description} />
          <meta name="keywords" content={metadataPopup.modal.keywords} />
          <meta name="author" content={metadataPopup.modal.keywords} />
          <title>{metadataPopup.XP_Bar.title}</title>
          <meta name="description" content={metadataPopup.XP_Bar.description} />
          <meta name="keywords" content={metadataPopup.XP_Bar.keywords} />
          <meta name="author" content={metadataPopup.XP_Bar.keywords} />
          <title>{metadataPopup.mainPage.title}</title>
          <meta
            name="description"
            content={metadataPopup.mainPage.description}
          />
          <meta name="keywords" content={metadataPopup.mainPage.keywords} />
          <meta name="author" content={metadataPopup.mainPage.keywords} />
        </head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
