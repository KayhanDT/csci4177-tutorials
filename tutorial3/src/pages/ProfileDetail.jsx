import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProfileDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) return <div style={{ padding: '20px' }}>Loading...</div>;
  if (!user) return <div style={{ padding: '20px' }}>Not found.</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/profile-listing">← Back</Link>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#ddd', margin: '0 auto 20px', overflow: 'hidden' }}>
          <img 
            src={user.picture} 
            alt={user.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
        <div>
          <h2 style={{ margin: '0 0 10px 0' }}>{user.name}</h2>
          <p style={{ margin: '0 0 5px 0', color: '#666' }}>{user.email}</p>
          <p style={{ margin: '0 0 30px 0', fontSize: '0.8rem', color: '#999' }}>{user._id}</p>
          
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>PHONE</div>
                <div>{user.phone}</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>COMPANY</div>
                <div>{user.company}</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>AGE</div>
                <div>{user.age}</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>GENDER</div>
                <div>{user.gender}</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>EYE COLOR</div>
                <div>{user.eyeColor}</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>BALANCE</div>
                <div>{user.balance}</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>STATUS</div>
                <div>{user.isActive ? 'Active' : 'Inactive'}</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>FAVORITE FRUIT</div>
                <div>{user.favoriteFruit}</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>REGISTERED</div>
                <div>{user.registered}</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>COORDINATES</div>
                <div>{user.latitude}, {user.longitude}</div>
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>ADDRESS</div>
              <div>{user.address}</div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>GREETING</div>
              <div>{user.greeting}</div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>TAGS</div>
              <div>{user.tags && user.tags.join(', ')}</div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>FRIENDS</div>
              <div>{user.friends && user.friends.map(f => f.name).join(', ')}</div>
            </div>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#888' }}>ABOUT</div>
              <p style={{ margin: '5px 0 0 0', lineHeight: '1.4' }}>{user.about}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
