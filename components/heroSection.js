const HeroSection = ({ title, children }) => {
    return (
        <div class="border-l-8 border-indigo-500 pt-2 my-4 pl-4">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    )
}

export default HeroSection
