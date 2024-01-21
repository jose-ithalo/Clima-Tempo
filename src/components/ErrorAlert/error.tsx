import ContentAlert from '../../types/contentAlert';

function ErrorAlert({ content }: ContentAlert) {
    return (
        <div className="popupAlert" style={{ backgroundColor: '#d43939' }}>
            {content}
        </div>
    );
}

export default ErrorAlert;