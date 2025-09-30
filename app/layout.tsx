import { Inter, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
    title: "The Nexus Digitals",
    description: "All in one solution to your Digital needs",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}
