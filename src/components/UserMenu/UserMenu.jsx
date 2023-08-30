import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from '../hooks';
import defaultAvatar from './default-avatar.png';
import { Container, Name, Avatar, Button } from './UserMenu.styled';
import { ReactComponent as AddIcon } from '../icons/logout.svg';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const avatar = defaultAvatar;

  return (
    <Container>
      <Avatar src={avatar} alt="avatar" />
      <Name>Welcome {user.name}</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <AddIcon />
      </Button>
    </Container>
  );
}