import React, { useState } from 'react';

const dummyMessages = [
  { id: 1, title: 'Siparişiniz Hakkında', content: 'Siparişiniz kargoya verilmiştir.' },
  { id: 2, title: 'Üyelik Bilgileri', content: 'Profil bilgileriniz güncellenmiştir.' },
  { id: 3, title: 'İndirim Kuponu', content: 'Yeni kuponunuz: INDIRIM20' },
];

const ProfileMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="profile-section" id="messages-section">
      <h2>Mesajlar</h2>
      <div className="messages-container">
        
        <div className="messages-sidebar">
          <input type="text" placeholder="Mesajlarda ara..." />
          <button>Arama</button>
          <button>Gelen Kutusu</button>
          <button>Gönderilen</button>
          <ul>
            {dummyMessages.map((msg) => (
              <li
                key={msg.id}
                onClick={() => setSelectedMessage(msg)}
                style={{ cursor: 'pointer', padding: '6px 0' }}
              >
                {msg.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="messages-content">
          <div className="message-view">
            {selectedMessage ? (
              <>
                <h3>{selectedMessage.title}</h3>
                <p>{selectedMessage.content}</p>
              </>
            ) : (
              <p>Mesaj seçilmedi.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMessages;
