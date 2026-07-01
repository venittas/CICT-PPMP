import { IconInfoCircle } from '@tabler/icons-react';
import '../note.css';

export default function InfoNote({ message }: { message: string }) {
    return (
        <div className="note info">
            <IconInfoCircle size={20} className="info-icon" />
            <p>{message}</p>
        </div>
    );
}