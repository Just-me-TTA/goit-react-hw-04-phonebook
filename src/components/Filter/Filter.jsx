import { Title } from 'components/App.styled';
import { FilterField } from './Filter.styled';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <Title>Find contacts by name</Title>
      <FilterField type="text" value={filter} onChange={handleFilter} />
    </div>
  );
};
