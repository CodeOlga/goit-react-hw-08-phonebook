import { BackgroundImage } from './Home.styled'

const styles = {
  title: {
    color: '#e8e8e8',
    fontWeight: 700,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 80,
  },
};

const Home = () => (
  <>
  <BackgroundImage />
    <h1 style={styles.title}> Phonebook</h1>
</>
);

export default Home;