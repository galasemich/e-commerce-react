import "./Header.css"
import { Nav } from "../Nav/Nav"

export const Header = () => {
    return (
        <header className="header">
            <div>
                <Nav />
            </div>
        </header>
    )
}