import ContentError from '../../types/contentError';

function ErrorAlert({ content }: ContentError) {
    return (
        <div className="popupAlert" style={{ backgroundColor: '#d43939' }}>
            {content}
        </div>
    );
}

export default ErrorAlert;