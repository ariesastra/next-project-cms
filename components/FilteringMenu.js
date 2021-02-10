// style
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const LIST_VIEW_ICONS = ['list', 'border-all']
const SORT_BY_ICON = ['sort-alpha-down', 'sort-alpha-up']

const FilteringMenu = ({onChange, filter}) => {
  return (
    <>
      <div className='filtering-menu mb-2'>
        <FontAwesomeIcon
          className="clickable hoverable mr-3"
          size='lg'
          icon={LIST_VIEW_ICONS[filter.view.list]}
          onClick={ () => {
            onChange('view', {list: +!filter.view.list})
          }} 
        />
        <FontAwesomeIcon
          className="clickable hoverable"
          size='lg'
          icon={SORT_BY_ICON[filter.date.asc]}
          onClick={ () => {
            onChange('date', {asc: +!filter.date.asc})
          }} 
        />
      </div>
    </>
  )
}

export default FilteringMenu