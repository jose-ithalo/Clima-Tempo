import './error.css';
import ContentError from '../../types/contentError';

function ErrorAlert({ content }: ContentError) {
    return (
        <div className="errorPopup">
            {content}
        </div>
    );
}

export default ErrorAlert;