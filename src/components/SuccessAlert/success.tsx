import ContentAlert from "../../types/contentAlert";

function SuccessAlert({ content }: ContentAlert) {
    return (
        <div className='popupAlert' style={{ backgroundColor: '#09ad09' }}>
            {content}
        </div>
    );
}

export default SuccessAlert;