
const AboutPage = () => {
    return(
        <div style={{padding: "40px 30px"}}>
            <h2>About Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam facere repellendus. Voluptate eius debitis, maiores saepe ut aliquam a, corrupti fugiat repudiandae quia in minima expedita nihil optio mollitia?</p>

            <p>
                &copy; All rights reserved {new Date().toLocaleDateString()}
            </p>
        </div>
    )
}

export default AboutPage