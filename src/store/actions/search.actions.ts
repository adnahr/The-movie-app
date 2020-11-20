import { SEARCH } from '../../const'

const searchAction = (search: string) => {
  return {
    type: SEARCH,
    payload: {
      search,
    },
  }
}

export default searchAction
