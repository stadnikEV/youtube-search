import htmlEencode from 'utils/html-encode'

export default (response) => {
  const { items } = response.data

  return items.map(item => (
    {
      id: item.id.videoId,
      title: htmlEencode(item.snippet.title),
      thumb: item.snippet.thumbnails.default.url,
    }
  ))
}
