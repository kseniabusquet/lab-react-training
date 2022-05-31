import profiles from '../data/berlin.json';

function FaceBook (){

    return (
        <div>
            {profiles.map((profile, index) => {
                return (
                    <div className = "facebook-wrapper" key={index}>
                        <img src = {profile.img} />
                        <div>
                        <p><b>First name:</b> {profile.firstName}</p>
                        <p><b>Last name:</b> {profile.lastName}</p>
                        <p><b>Country:</b> {profile.country}</p>
                        {profile.isStudent && <p><b>Type:</b> Student</p>}
                        {!profile.isStudent && <p><b>Type: </b>Teacher</p>}
                        </div>
                    </div>
        );
      })}
        </div>
      );
}

export default FaceBook