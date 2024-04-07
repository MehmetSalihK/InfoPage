// InstagramFeed.tsx
import '../styles/instagram.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstagramFeed: React.FC = () => {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://graph.instagram.com/me/media', {
          params: {
            fields: 'id,caption,media_url,media_type,permalink,timestamp,username',
            access_token: 'IGQWROTEQ0d0hlLVIwdEtQeTFJSkNfMlRnWEtJZATR3aXNWalpUeG5qakF3NThWVmEwcTNNNkpRYTB4M2dMbC13VTVsVXBpNlRvSXlxTlFiOWpXeXBKaFRDS0E3WnJVVEs5VkpiWGtNUEtraTY3VnBHZAktURWVwZATgZD',
          },
        });
        setPhotos(response.data.data);
      } catch (error) {
        console.error('Instagram fotoğrafları getirilirken hata oluştu:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="instagram-feed">
      {photos.map(photo => (
        <div key={photo.id} className="instagram-post">
          {photo.media_type === 'IMAGE' && <img src={photo.media_url} alt={photo.caption} />}
          {photo.media_type === 'VIDEO' && (
            <video controls>
              <source src={photo.media_url} type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          )}
          <a href={photo.permalink} target="_blank" rel="noopener noreferrer">Instagram'da Görüntüle</a>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;