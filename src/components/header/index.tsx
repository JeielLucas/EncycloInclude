import logo from '../../assets/home/P1 AZUL ESCURO.png';
import user from '../../assets/home/iconUser.png';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const ImageLogo = styled.img`
 width: 9rem;
  padding: 1rem;

    @media(max-width: 900px){
       width: 7rem;

     }
     @media(max-width: 768px){
        width: 6rem;

     }
`;

const Image = styled.img`
    width: 20px;
`;

const pages = [
    {
        nome: 'Início',
        path: '/',
    },
    {
        nome: 'Portal',
        path: '/portal',
    },
    {
        nome: 'Avaliações',
        path: '/avaliacoes',
    },
    {
        nome: 'Ferramentas',
        path: '/ferramentas',
    },
    {
        nome: 'Quem somos',
        path: '/quemsomos',
    }
];
const settings = ['Conta', 'Sair'];


export const Header: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [scrolled, setScrolled] = React.useState(false);
    const [selectedPage, setSelectedPage] = React.useState('Início');
    const navigate = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // <AppBar position="static" elevation={0} style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
        <AppBar
            position="fixed"
            elevation={scrolled ? 1 : 0}
            style={{ background: scrolled ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)', padding: '0 15px' }}
        >
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <Box
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            width: '100px',
                        }}
                    >
                        <ImageLogo src={logo} alt="Logo" />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.nome}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        setSelectedPage(page.nome);
                                        navigate(page.path)
                                    }}>
                                    <Typography textAlign="center"
                                        sx={{ color: selectedPage === page.nome ? ' #3e6dbd' : '#000' }}
                                    >{page.nome}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                        }}
                    >
                        <ImageLogo src={logo} alt="Logo" style={{ width: '10rem', padding: '1rem' }} />
                    </Box>


                    <Box sx={{ flexGrow: { xs: 0, md: 1 }, display: 'flex' }}>
                        {/* opções */}
                        <Box

                            width='100%'
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'flex-end',
                                gap: '20px',

                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page.nome}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        setSelectedPage(page.nome);
                                        navigate(page.path)
                                    }}

                                    sx={{
                                        my: 2,
                                        color: selectedPage === page.nome ? ' #3e6dbd' : 'white',
                                        fontSize: { xs: 14, md: 16 },
                                        fontFamily: 'Montserrat, sans-serif',
                                        backgroundColor: 'transparent', // torna o fundo transparente
                                        '&:hover': {
                                            backgroundColor: 'transparent', // torna o fundo transparente ao passar o mouse
                                            color: '#4e6bbb', // altera a cor do texto ao passar o mouse
                                        },
                                    }}

                                >
                                    {page.nome}
                                </Button>
                            ))}
                        </Box>

                        <Tooltip title="Open settings" >
                            <IconButton onClick={handleOpenUserMenu} sx={{ marginLeft: '20px', p: 0 }}>
                                <Image src={user} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
