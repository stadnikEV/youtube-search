
export default (response) => {
  const { items } = response.data

  return items.map(item => (
    {
      votes: item.statistics.likeCount,
    }
  ))
}
