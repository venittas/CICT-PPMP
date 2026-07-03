import './dashboard-procurement-card.css';
import { 
    IconClockX, 
    IconFileStack, 
    IconClockCheck, 
    IconTransform, 
    IconCloudUpload, 
    IconClock, 
    IconClockCancel 
} from '@tabler/icons-react';

interface ProcurementCardProps {
    icon?: string;
    title: string;
    description: string;
    date: string;
    value?: number;
    userFullName?: string;
}

export default function DashboardProcurementCard({
    icon = 'default', 
    title, 
    description, 
    date, 
    value, 
    userFullName
}: ProcurementCardProps) {

    const colorMap: Record<string, string> = {
        rejected: 'red',
        approved: 'green',
        arrived: 'green',
        requested: 'blue',
        reallocate: 'orange',
        upload: 'purple',
        cancel: 'gray',
        default: 'yellow'
    };

    const iconMap: Record<string, React.ReactNode> = {
        rejected: <IconClockX size={18} />,
        approved: <IconClockCheck size={18} />,
        arrived: <IconClockCheck size={18} />,
        requested: <IconFileStack size={18} />,
        reallocate: <IconTransform size={18} />,
        upload: <IconCloudUpload size={18} />,
        cancel: <IconClockCancel size={18} />,
        default: <IconClock size={18} />
    };

    const activeColor = colorMap[icon] || colorMap.default;
    const ActiveIcon = iconMap[icon] || iconMap.default;

    return (
        <div className="dashboard-procurement-card">
            <div className="icon-container">
                <div className={`icon ${activeColor}`}>
                    {ActiveIcon}
                </div>
            </div>
            
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="date-value-container">
                    <span>Made by: {userFullName} • {date}</span>
                    {value !== undefined && (
                        <p className="value">
                            PHP {value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}