type TypeSong = {
  artworkUrl100: string;
  collectionName: string;
  artistName: string;
};

export default function AlbumCard(
  { collectionName, artistName, artworkUrl100 }: TypeSong,
) {
  return (
    <div>
      <img src={ artworkUrl100 } alt={ collectionName } />
      <h2>
        { collectionName }
      </h2>
      <p>
        { artistName }
      </p>
    </div>
  );
}
