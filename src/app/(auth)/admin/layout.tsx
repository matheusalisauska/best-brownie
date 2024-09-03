import { Nunito_Sans } from "next/font/google";


const nunito = Nunito_Sans({subsets: ['latin']});
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={nunito.className}>
            {children}
        </div>
    );
}
