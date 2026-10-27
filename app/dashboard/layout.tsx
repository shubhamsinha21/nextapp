import type {ReactNode} from 'react';

export default function RootLayout({children}: {children: ReactNode}) {
    return (

        // this is dashboard and can have many components or files
        <section style={{padding: 12, background:"lightgreen"}}>
            <aside style={{padding: 6, background:"lightyellow"}}>
                <h2>Dashboard Sidebar</h2>
                <ul>
                    <li>Overview</li>
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
            </aside>
            <div style={{padding: 6, background:"lightcoral"}}>
                {children}

            </div>

        </section>
    )
}