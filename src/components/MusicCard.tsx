type TypeSong = {
  trackName: string;
  previewUrl: string;
  trackId: number;
  artistName: string;
  artworkUrl100: string;
};

export default function MusicCard(
  { trackName, previewUrl, trackId, artistName, artworkUrl100 }: TypeSong,
) {
  return (
    <div key={ trackId }>
      <img src={ artworkUrl100 } alt={ trackName } />
      <h2>
        Nome da música:
        { ' ' }
        { trackName }
      </h2>
      <p>
        Nome do Artista:
        { ' ' }
        { artistName }
      </p>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento audio.
      </audio>
    </div>
  );
}
