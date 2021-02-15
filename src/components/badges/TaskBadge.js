import { Link } from 'react-router-dom'
import { IconClipboardCheck } from '../ui/Icons'

const TaskBadge = ({ task }) => {
    const styles = {
        badge: {
            color: `var(--yellow)`,
            alignItems: 'center',
            display: `inline-flex`,
            borderRadius: 'var(--borderRadius, 3px)',
            fontWeight: 'var(--fontBold)',
        }
    }

    return (
        <Link to={"/tasks/" + task.id} style={styles.badge}>
            <IconClipboardCheck />
            {task.name}
        </Link>
    )
}

export default TaskBadge;
