import { useHistory } from 'react-router-dom';
export default function BackBtn(props) {
    const history = useHistory();

    return (
        <div className={props.className}>
            <span
                role="link"
                onClick={() => history.go(-1)}
                className="back-btn"
            >
                Go Back
            </span>
        </div>
    );
}
