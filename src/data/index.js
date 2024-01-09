import moment from "moment";
import 'moment/locale/ru';

export const data = [
  {
    url: 'https://www.youtube.com/watch?v=7W4PD4BN3eY',
    date: moment().subtract(15, 'seconds')
  },
  {
    url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
    date: moment().subtract(12, 'minutes')
  },
  {
    url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
    date: moment().subtract(3, 'hours')
  },
  {
    url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
    date: moment().subtract(15, 'days')
  },
  {
    url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
    date: moment().subtract(1, 'months')
  },
  {
    url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
    date: moment().subtract(5, 'years')
  },
]