import './index.scss'

const Select = ({options, defaultValue, ...props}) => {
  return (
    <label className='select' >
      <select {...props} >
        <option disabled value='' >
          {defaultValue}
        </option>
        {options.map(option => 
          <option 
            key={option.value}
            value={option.value} 
          >
            {option.name}
          </option>
        )}
      </select>
    </label>
  )
}

export { Select }