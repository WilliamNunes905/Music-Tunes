import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MusicCard from '../../components/MusicCard';
import getMusics from '../../services/musicsAPI';
import { Loading } from '../../components/Loading';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';

export default function Album() {
  const [loading, setLoading] = useState<boolean>(true);
  const [albumInfo, setAlbumInfo] = useState<any | []>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMusics(id as string);
        setAlbumInfo(data);
      } catch (error) {
        console.error('Error fetching album data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Header>Musicas Favoritas</Header>
      <NavBar />
      {loading && <Loading className="loading-album" />}
      {
        albumInfo.length > 0 ? (
          albumInfo.map((music: any) => (
            <MusicCard
              key={ music.trackId }
              trackName={ music.trackName }
              previewUrl={ music.previewUrl }
              trackId={ music.trackId }
              artistName={ music.artistName }
              artworkUrl100={ music.artworkUrl100 }
            />
          ))) : (<p>Nenhuma música favorita</p>)
      }
    </div>
  );
}
