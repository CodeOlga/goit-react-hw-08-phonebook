import { BiSolidEditAlt } from 'react-icons/bi';
import { Watermark } from 'antd';
import {
  FcBusinessContact,
  FcCellPhone,
  FcConferenceCall,
} from 'react-icons/fc';

const styles = {
  container: {
    minHeight: 'calc(50vh - 50px)',
    minWidth: 'calc(50vw - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
    textAlign: 'center',
  },
};

const Home = () => (
  <Watermark gap={[50, 50]} content="Phonebook">
    <div style={styles.container}>
      <h1 style={styles.title}>Home page of the Phonebook</h1>
      <p>
        <BiSolidEditAlt size="75" fill="#2b35c2" />
        <FcCellPhone size="75" />
        <FcConferenceCall size="75" />
        <FcBusinessContact size="75" />
      </p>
    </div>
  </Watermark>
);

export default Home;