const Navbar = () => {
    const navigationItems = [
        'Home',
        'About us',
        'Showcase',
        'Blog',
        'Contac',
        'Sign in',
    ];
    const defaultItemStyle =
        'w-36 py-4 font-bold text-2xl text-center text-white bg-purple-900';

    return (
        <nav className="inline-flex justify-between list-none w-max">
            {navigationItems.map((item) => (
                <li key={item} className={defaultItemStyle}>
                    {item}
                </li>
            ))}
        </nav>
    );
};

export default Navbar;
