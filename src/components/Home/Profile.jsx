/* eslint-disable react/style-prop-object */
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
                <h1 style={{ fontSize: '55px' }}>My Name Is <hr /> Marius Edel
                </h1>
            </section>
        </div>
    );
}

export default Profile;