function Profile({ user }) {
  return (
    <div className="profile-container">
      <h1>Profile Page</h1>

      <div className="profile-card">
        <div className="profile-row">
          <strong>First Name:</strong>
          <span>{user.firstName}</span>
        </div>
        
        <div className="profile-row">
          <strong>Last Name:</strong>
          <span>{user.lastName}</span>
        </div>

        <div className="profile-row">
          <strong>Email:</strong>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile
