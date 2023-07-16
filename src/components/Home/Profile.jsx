/* eslint-disable jsx-a11y/alt-text */
function Profile() {
    return (
        <div id="profile">
            <section className="image">
                <img
                    src={require("../../media/Marius.jpg")}
                    title="Marius Edel"
                />
            </section>
            <section className="writing">
                <h3>
                    Hi I´m Marius Edel and I am an german student with
                    extensive experience in data analysis,
                    automation, and visualization. I can help you
                    streamline your workflow and improve
                    productivity with customized Excel spreadsheets
                    and VBA macros. I am dedicated to providing
                    high-quality solutions, timely delivery and great
                    customer service. Contact me to see how I can
                    help you with your data needs.
                </h3>
            </section>
        </div>
    );
}

export default Profile;