export default function getFilteredList(state, filters) {
    return state.filter((item, i)=>{
      return i < Number(filters.current)
    })
  }
  