import cl from './index.module.scss'
import { Input, Select } from '../../../../components/index'

const SearchAndFilter = ({filter, setFilter}) => {
  return (
    <div className={cl.component}>
      <Input 
        type='text'
        maxLength={20}
        value={filter.query}
        placeholder='Search...'
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <div className={cl.filter}>
        <div>Find by</div>
        <Select 
          value={filter.sort}
          defaultValue='Title'
          onChange={e => setFilter({...filter, sort: e.target.value})}
          options={[
            {name: 'Author', value: 'author'}
          ]}
        />
      </div>
    </div>
  )
}

export { SearchAndFilter }