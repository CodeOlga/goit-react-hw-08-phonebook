import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from '../hooks';
import defaultAvatar from './default-avatar.png';
import { ReactComponent as AddIcon } from '../icons/logout.svg';
import { Container, Name, Avatar, UserButton, WelcomeWrap } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <Container>
      <WelcomeWrap>
        <Avatar src={avatar} alt="avatar" />
        <Name>Welcome {user.name}</Name>
      </WelcomeWrap>
      
      <UserButton type="button" onClick={() => dispatch(logOut())}>
        <AddIcon />
      </UserButton>
    </Container>
  );
}

export default UserMenu;