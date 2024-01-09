import PropType from 'prop-types'

export default function DateTime({ date }) {
  return (
    <p className="date">{date}</p>
  )
}

DateTime.propTypes = {
  date: PropType.string.isRequired
}
