import { AppRoutes } from './routes.routing';

export const NavRouting = [
    {
        url: '/' + AppRoutes.home.path,
        title: 'Inicio',
        icon: 'fa-home'
    },
    {
        url: '/' + AppRoutes.employees.path,
        title: 'Empleados',
        icon: 'fa-users'
    },
    {
        url: '/' + AppRoutes.activities.path,
        title: 'Actividades',
        icon: 'fa-tasks'
    },
    {
        url: '/' + AppRoutes.components.path,
        title: 'Componentes',
        icon: 'fa-th'
    },
    {
        url: '/' + AppRoutes.settings.path,
        title: 'Configuración',
        icon: 'fa-cog'
    }
]