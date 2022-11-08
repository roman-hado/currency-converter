import { createUseStyles } from 'react-jss';
import { COLOR } from '../../styles/variables';

export const useStyles = createUseStyles({
  wrapper: {
    maxWidth: '800px',
    height: '140px',
    margin: '0 auto',
    marginTop: '30px',
    display: 'flex',
    boxShadow: `0 12px 12px -6px ${COLOR.MOSQUE}`
  },
  input: {
    margin: '0 4px 0 10px'
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'raw'
  },
  giveWrapper: {
    width: '50%',
    height: '140px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  getWrapper: {
    width: '50%',
    height: '140px',
    backgroundColor: COLOR.ZIGGURAT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
