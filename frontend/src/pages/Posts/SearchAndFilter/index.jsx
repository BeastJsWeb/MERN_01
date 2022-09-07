import styles from './index.module.scss'
import { Input } from '../../../components/UI/Input'
import { Select } from '../../../components/UI/Select'

const SearchAndFilter = ({filter, setFilter}) => {
  return (
    <div className={styles.component}>
      <Input 
        type='text'
        maxLength={20}
        value={filter.query}
        placeholder='Search...'
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <div className={styles.filter}>
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