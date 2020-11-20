import { SEARCH } from '../../const'
import { SearchType } from '../../Types'

const SearchReducer = (state = { search: '' }, action: SearchType) => {
  switch (action.type) {
    case SEARCH:
      return action.payload

    default:
      return state
  }
}

export default SearchReducer
