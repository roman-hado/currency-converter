import { createUseStyles } from 'react-jss';
import { COLOR } from '../../styles/variables';

const boxWrapper = {
  marginLeft: '30px',
  marginRight: '30px'
};

export const useStyles = createUseStyles({
  header: {
    width: '100vw',
    height: '80px',
    background: COLOR.HEADER_BG,
    display: 'flex',
    alignItems: 'center'
  },
  logoWrapper: {
    extend: boxWrapper,
    height: '40px',
    width: '200px',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '6px',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(to left, turquoise, greenyellow) 1 0',
  },
  ratesWrapper: {
    extend: boxWrapper,
    fontSize: '14px',
  },
  rateWrapper: {
    width: '160px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: '700'
  },
  rateValue: {
    fontWeight: '500'
  }
})
