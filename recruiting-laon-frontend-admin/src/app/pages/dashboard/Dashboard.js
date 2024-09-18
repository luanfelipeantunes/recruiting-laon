import Container from '../../components/container/Container';
import HeaderBetter from '../../components/headerBetter/HeaderBetter';
import SideBar from '../../sideBar/SideBar';

export default function Dashboard() {
    return (
        <Container>
            <HeaderBetter />
            <h1>Dashboard</h1>
            <SideBar/>
        </Container>
    )
}