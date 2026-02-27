import "./globals.css";

export const metadata = {
  title: "Aerovans Venezuela",
  description: "Transporte privado y turístico en Mérida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}