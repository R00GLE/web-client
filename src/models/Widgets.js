import ActiveProjectsWidget from "components/layout/dashboard/widgets/ActiveProjectsWidget";
import MyTasksWidget from "components/layout/dashboard/widgets/MyTasksWidget";
import PopularCommandsWidget from "components/layout/dashboard/widgets/PopularCommandsWidget";
import RecentActivityWidget from "components/layout/dashboard/widgets/RecentActivityWidget";
import RecentDocumentsWidget from "components/layout/dashboard/widgets/RecentDocumentsWidget";
import UserActivityStatsWidget from "components/layout/dashboard/widgets/UserActivityStatsWidget";
import VulnerabilitiesByCategoryStatsWidget from "components/layout/dashboard/widgets/VulnerabilitiesByCategoryStatsWidget";
import VulnerabilitiesByRiskStatsWidget from "components/layout/dashboard/widgets/VulnerabilitiesByRiskStatsWidget";

const Widgets = {
    'my-tasks': {
        title: 'My tasks',
        description: 'It shows a list of all open tasks assigned to you.',
        visible: true,
        component: <MyTasksWidget />
    },
    'vulnerability-by-risk-stats': {
        title: 'Vulnerability by risk',
        visible: true,
        component: <VulnerabilitiesByRiskStatsWidget />
    },
    'active-projects': {
        title: 'Active projects',
        visible: true,
        component: <ActiveProjectsWidget />,
        description: 'It shows a list of all non-archived projects.'
    },
    'popular-commands': {
        title: 'Popular commands',
        visible: true,
        component: <PopularCommandsWidget />
    },
    'recent-documents': {
        title: 'Recent documents',
        visible: true,
        component: <RecentDocumentsWidget />,
        description: 'It shows a list of the most recent documents.'
    },
    'vulnerability-by-category-stats': {
        title: 'Vulnerability by category',
        visible: true,
        component: <VulnerabilitiesByCategoryStatsWidget />
    },
    'recent-activity': {
        title: 'Recent activity',
        visible: true,
        component: <RecentActivityWidget />
    },
    'user-activity-stats': {
        title: 'User activity over time',
        visible: true,
        component: <UserActivityStatsWidget />
    },
};

export default Widgets;