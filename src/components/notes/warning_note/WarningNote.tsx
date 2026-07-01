import { IconAlertTriangle } from '@tabler/icons-react';
import '../note.css';

export default function WarningNote({ message }: { message: string }) {
    return (
        <div className="note warning">
            <IconAlertTriangle size={20} className="warning-icon" />
            <p>{message}</p>
        </div>
    );
}