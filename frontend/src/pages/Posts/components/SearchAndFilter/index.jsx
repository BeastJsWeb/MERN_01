import cl from './index.module.scss'
import { Input, Select } from '../../../../components/index'

const SearchAndFilter = ({filter, setFilter, pageLimit, setPageLimit}) => {
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
        <Select 
          defaultValue={{name: 'Page limit', value: pageLimit}}
          onChange={e => setPageLimit(e.target.value)}
          options={[
            {name: 5, value: 5},
            {name: 10, value: 10},
            {name: 20, value: 20},
            {name: 'Show all', value: -1}
          ]}
        />
        <Select 
          defaultValue={{name: 'Sort', value: filter.sort}}
          onChange={e => setFilter({...filter, sort: e.target.value})}
          options={[
            {name: 'Title', value: 'title'},
            {name: 'Author', value: 'author'}
          ]}
        />
        <div>
          
          <Select 
            defaultValue={{name: 'Find by', value: filter.by}}
            onChange={e => setFilter({...filter, by: e.target.value})}
            options={[
              {name: 'Title', value: 'title'},
              {name: 'Author', value: 'author'}
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export { SearchAndFilter }