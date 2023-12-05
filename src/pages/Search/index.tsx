import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';
import { Loading } from '../../components/Loading';
import Header from '../../components/Header';
import Main from '../../components/Main';
import NavBar from '../../components/NavBar';
import AlbumCard from '../../components/AlbumCard';
import styles from './search.module.css';

export default function Search() {
  const [artistName, setArtistName] = useState('');
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setArtistName(event.target.value);
  }
  async function handleClick() {
    setLoading(true);
    try {
      const result = await searchAlbumsAPI(artistName);
      setAlbums(result);
    } catch (error) {
      console.error('Error searching albums:', error);
    } finally {
      setLoading(false);
      setArtistName('');
    }
  }

  return (
    <div>
      <div>
        <Header>
          <input
            type="text"
            onChange={ (event) => handleChange(event) }
            value={ artistName }
            placeholder="Digite sua busca aqui"
            className={ styles.searchArtistInput }
          />
          <Button
            type="button"
            onClick={ () => handleClick() }
            className={ styles.searchArtistButton }
            disabled={ artistName.length < 2 }
          >
            Pesquisar
          </Button>
        </Header>
        <NavBar />
      </div>
      <Main>
        {loading && <Loading className="loading-search" />}
        {albums.length === 0 && !loading && (<h3>Nenhum álbum foi encontrado</h3>)}
        {
          albums.length > 0 && (
            <div>
              <br />
              <ul className={ styles.containerUl }>
                {
                albums.map((album) => (
                  <div
                    key={ album.collectionId }
                    className={ styles.containerAlbums }
                  >
                    <AlbumCard
                      artworkUrl100={ album.artworkUrl100 }
                      collectionName={ album.collectionName }
                      artistName={ album.artistName }
                    />
                    <Link to={ `/album/${album.collectionId}` }>Mais detalhes</Link>
                  </div>
                ))
              }
              </ul>
            </div>
          )
      }
      </Main>
    </div>
  );
}
