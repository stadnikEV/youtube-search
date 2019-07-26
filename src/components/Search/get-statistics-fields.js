
export default (response) => {
  const { items } = response.data

  return items.map(item => (
    {
      voites: item.statistics.likeCount,
    }
  ))
}
