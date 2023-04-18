type GenresInterface = {
  name: string;
};

export default function Genres(value: GenresInterface) {
  return (
    <label>
      <input type="checkbox" />
      {value.name}
    </label>
  );
}
