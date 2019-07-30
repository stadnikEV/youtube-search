import config from 'app-config'
import axios from 'axios'
import getSnippetFields from './get-snippet-fields'
import getStatisticsFields from './get-statistics-fields'


export default ({ searchString }) => {
  const { clientKey: key, path } = config.youtube

  let resultFields = null

  const promise = new Promise((resolve, reject) => {
    // get snippets
    axios.get(`${path}search?key=${key}&q=${searchString}&part=snippet&type=video&maxResults=3`)
      .then((result) => {
        resultFields = getSnippetFields(result)

        const idString = resultFields.map(video => video.id)
          .join(',')

        // get statistics
        return axios.get(`${path}videos?key=${key}&id=${idString}&part=statistics`)
      })
      .then((result) => {
        const statisticsFields = getStatisticsFields(result)

        resultFields = resultFields.map((item, index) => (
          { ...item, votes: statisticsFields[index].votes }
        ))

        resolve(resultFields)
      })
      .catch((e) => {
        reject(e)
      })
  })

  return promise
}
