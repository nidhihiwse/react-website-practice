import './Profile.css';

function ProfilePage() {
  const Nidhi = {
		name: 'Nidhi Hiwse',
		imageUrl: './nhiwse.png',
	};

  return (

    <section id="profile-section">
      <div className="profile">
        <img className="profile-img" src={Nidhi.imageUrl} alt={'Photo of ' + Nidhi.name}/>
        <h1>{Nidhi.name}</h1>
      </div> 
    </section>

  )
}

export default ProfilePage;