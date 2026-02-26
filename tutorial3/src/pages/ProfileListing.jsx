import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProfileListing = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://express-t4.onrender.com/api/users');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const fullName = (user.name || '').toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  if (loading) return <div style={{ padding: '20px' }}>Loading...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Users</h2>
        <button onClick={() => navigate('/')} style={{ width: 'auto' }}>Logout</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ maxWidth: '300px', marginBottom: '30px' }}
      />
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '30px' 
      }}>
        {filteredUsers.map((user) => (
          <Link key={user._id} to={`/profile-detail/${user._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            <div style={{ textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '15px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ddd', margin: '0 auto 10px', overflow: 'hidden' }}>
                <img 
                  src={user.picture} 
                  alt={user.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ fontWeight: 'bold' }}>{user.name}</div>
              <div style={{ fontSize: '0.85rem', color: '#666' }}>{user.email}</div>
              <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '5px' }}>{user._id}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileListing;
