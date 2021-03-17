
import { Button } from "./Button";


interface SideBarProps {
  genres: Array<{
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }>;
  selectedGenreId: number;
  handleClickButton(id: number): void; //estrutura de uma função
};

export function SideBar({ genres, handleClickButton, selectedGenreId }: SideBarProps) {
  // Complete aqui
  return (
    <div className="buttons-container">
      {genres.map((genre) => (
        <Button
          id={String(genre.id)}
          className="animate-ToptoBottom btn"
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  );
};