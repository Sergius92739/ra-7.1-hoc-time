import DateTime from "../DateTime/DateTime";
import withConvertDate from "../withConvertDate/withConvertDate";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const DateTimePretty = withConvertDate(DateTime);

export default function Video({ url, date }) {
  return (
    <div className="video">
      <iframe title={nanoid(5)} src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={date} />
    </div>
  )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired
}
