import chefIcon from "../assets/chef-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefIcon} alt="chef-icon" className="chef-icon"/>
            <p className="title-header">Chef Claude</p>
        </header>
    )
}