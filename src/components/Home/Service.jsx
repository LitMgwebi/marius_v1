function Service() {
    return (
        <div id="service">
            <h1>Services</h1>
            <div className='idea'>
                <section className="development">
                    <div className="ideaImage">
                        <img src={require("../../media/idea.png")} alt="Idea Development" />
                    </div>
                    <h2>Idea Development</h2>
                    <h3>You have an idea but don't know how to realize it? I will help you</h3>
                </section>
                <section className="execution">
                    <div className="ideaImage">
                        <img src={require("../../media/Computer.png")} alt="Idea Execution" />
                    </div>
                    <h2>Idea Execution</h2>
                    <h3>The best idea are worthless without execution. I will build your custom Excel sheet.</h3>
                </section>
            </div>
        </div>
    )
}

export default Service;