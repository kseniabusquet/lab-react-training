import profiles from '../data/berlin.json';

function FaceBook (){

    const countries = []
    profiles.forEach(profile => countries.push(profile.country));
    let uniqueCountries = countries.filter((element, index) => {
        return countries.indexOf(element) === index;
    });

    return (
        <div>
            <div className="buttons">
                <button className='country-button'>All</button>
                {uniqueCountries.map((country,index) =>{
                    return <button className='country-button' key = {index}>{country}</button>
                })}
                
            </div>

            <div>
                {profiles.map((profile, index) => {
                return (
                    <div className = "facebook-wrapper" key={index}>
                        <img className='facebook-picture'src = {profile.img} alt = 'profile'/>
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
        </div>
      );
}

export default FaceBook